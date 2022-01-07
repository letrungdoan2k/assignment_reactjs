import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { readBrand } from "../../../api/brandAPI";

const EditBrand = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    let navigate = useNavigate();

    //
    const { id } = useParams();
    const [brands, setBrands] = useState({});
    //
    useEffect(() => {
        readBrand(id).then((response) => {
            setBrands(response.data);
          reset(response.data);
        });
      }, [id, reset]);

    const onSubmit = (data) => {
        props.onUpdate(data);
        navigate("/admin/brand", { replace: (true) });
    };

    const EditBrandForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <h3 className="content__box-product-add-name">Sửa thương hiệu</h3>
                <div className="content__box-product-add-field">
                    <label htmlFor>Tên thương hiệu :</label>
                    <input type="text" placeholder="tên thương hiệu" className="input-txt" {...register("name", { required: true })} />
                    {errors.name && <p>Field is required</p>}
                </div>
                <div className="content__box-product-add-btn" >
                    <button className="content__box-product-btn">Sửa thương hiệu</button>
                    <button onClick={() => navigate(-1)}>Quay lai</button>
                </div>
            </form>
        );
    };

    return (
        <div><EditBrandForm /></div>
    );
};
export default EditBrand;