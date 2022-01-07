import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate, useParams, Link } from "react-router-dom";
import { readProduct, updateProduct } from "../../../api/productAPI";
import { storage } from "../../../firebase/firebase.config";
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from '@firebase/storage';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const EditProduct = (props) => {
    let navigate = useNavigate();
    const [values, setValue] = useState("");
    const [error, setError] = useState([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    console.log(values)
    useEffect(() => {
        readProduct(id).then((response) => {
            setProduct(response.data);
            setValue(response.data.price);
            reset(response.data);
        })
    }, [id, reset]);

    const onSubmit = (data) => {
        if (data.image[0].name) {
            let image = data.image[0];
            const storageRef = ref(storage, `image/${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);
            console.log(uploadTask)
            uploadBytes(storageRef, image).then(() => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log(downloadURL);
                    const newData = { id, ...data, image: downloadURL }
                    console.log(newData)
                    updateProduct(newData).then((response) => {
                        if (response.data.success != false) {
                            toast.success("Sửa thành công")
                            props.onUpdate(newData)
                            navigate("/admin/product", { replace: true })
                        } else {
                            const err = response.data.errors
                            setError(err)
                        }
                    });
                })
            })
        } else {
            const newData = { id, ...data }
            updateProduct(newData).then((response) => {
                if (response.data.success != false) {
                    toast.success("Sửa thành công")
                    props.onUpdate(newData)
                    navigate("/admin/product", { replace: true })
                } else {
                    const err = response.data.errors
                    setError(err)
                }
            });
        }
    }

    const addProductFrom = () => {
        return (
            <form className="content__box-product-add" method="POST" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="content__box-product-add-name">Sửa sản phẩm</h3>
                <div className="content__box-product-add-field">
                    <label htmlFor>Danh mục :</label>
                    <select {...register("cate_id")} className="select-value">
                        {props.categories && props.categories.map(
                            (item, index) => {
                                return (
                                    <option key={index} value={item.id}>{item.name}</option>
                                );
                            })}
                    </select>
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Tên sản phẩm :</label>
                    <input type="text" placeholder="Tên sản phẩm" className="input-txt" {...register('name', { required: "Bạn chưa nhập tên sản phẩm", maxLength: { value: 255, message: "Tên quá dài" } })} />
                    <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type} style={{ color: 'red' }}>{message}</p>
                            ))
                        }
                    />
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Ảnh sản phẩm :</label>
                    <input type="file" {...register('image')} placeholder="ảnh sp" className="input-file" />
                    <img src={product.image} style={{ width: '80px' }} />
                    {error.image && <p style={{ color: 'red' }}>{error.image}</p>}
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Giá sản phẩm :</label>
                    <input type="number" placeholder="giá sp" className="input-txt" {...register('price', { required: "Bạn chưa nhập giá", maxLength: { value: 32, message: "Bạn Nhập số quá lớn" } })} onChange={(event) => setValue(event.target.value)} />
                    <ErrorMessage
                        errors={errors}
                        name="price"
                        render={({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type} style={{ color: 'red' }}>{message}</p>
                            ))
                        }
                    />
                    {error.price && <p style={{ color: 'red' }}>{error.price}</p>}
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Thương hiệu :</label>
                    <select {...register('brand_id')} className="select-value">
                        {props.brands && props.brands.map(
                            (item, index) => {
                                return (
                                    <option value={item.id}>{item.name}</option>
                                );
                            }
                        )}
                    </select>
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Giá Sale :</label>
                    {values && 
                        <input type="number" {...register('price_sale', {max: values - 1 })} placeholder="giá sale" className="input-txt" />
                    }
                    {errors.price_sale && <p style={{ color: 'red' }}>Giá sale phải nhỏ hơn giá gốc</p>}
                    <ErrorMessage
                        errors={errors}
                        name="price_sale"
                        render={({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type} style={{ color: 'red' }}>{message}</p>
                            ))
                        }
                    />
                    {error.price_sale && <p style={{ color: 'red' }}>{error.price_sale}</p>}
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Số lượng :</label>
                    <input type="number" {...register('quantity', { required: "Bạn cần nhập mô tả", value: 0 })} placeholder="số lượng" className="input-txt" />
                    <ErrorMessage
                        errors={errors}
                        name="quantity"
                        render={({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type} style={{ color: 'red' }}>{message}</p>
                            ))
                        }
                    />
                    {error.quantity && <p style={{ color: 'red' }}>{error.quantity}</p>}
                </div>
                <div className="content__box-product-add-field editer">
                    <div style={{ width: '20%' }}>
                        <label style={{ width: '100%' }} className="label-editer">Mô tả :</label>
                        <ErrorMessage
                            errors={errors}
                            name="description"
                            render={({ messages }) =>
                                messages &&
                                Object.entries(messages).map(([type, message]) => (
                                    <p key={type} style={{ color: 'red' }}>{message}</p>
                                ))
                            }
                        />
                        {error.description && <p style={{ color: 'red' }}>{error.description}</p>}
                    </div>
                    <textarea {...register('description', { required: "Bạn cần nhập mô tả" })} cols={30} rows={10} placeholder="mô tả" className="txt-box" />
                </div>
                <div className="content__box-product-add-btn">
                    <button className="content__box-product-btn">sửa sản phẩm</button>
                    <button onClick={() => navigate(-1)}>Hủy</button>
                </div>
            </form>
        )
    };
    return <div>{addProductFrom()}</div>
};
export default EditProduct;