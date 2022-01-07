import { ErrorMessage } from '@hookform/error-message';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router";
import { toast } from 'react-toastify';
import { readUser, updateUser } from '../../../api/userAPI';

const EditUser = (props) => {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ criteriaMode: 'all' });
    const { id } = useParams();

    const onSubmit = (data) => {
        const newData = {id, ...data}
        updateUser(newData)
            .then((response) => {
                toast.success("Sửa thành công");
                props.onUpdate(data)
                navigate("/admin/user", { replace: true })
            })
    }

    useEffect(() => {
        readUser(id).then((response) => {
            console.log(response.data, "fffffffff")
            reset(response.data);
        })
    }, [id, reset]);

    const editUserFrom = () => {
        return (
            <form className="content__box-product-add" method="POST" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="content__box-product-add-name">Sửa user</h3>
                <div className="content__box-product-add-field">
                    <label htmlFor>Tên người dùng :</label>
                    <input type="text" placeholder="Tên người dùng" className="input-txt" {...register('name', { required: "Bạn chưa nhập tên", maxLength: { value: 255, message: "Tên quá dài" } })} />
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
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>email :</label>
                    <input type="text" placeholder="email" className="input-txt" {...register('email', { required: "Bạn chưa nhập email", maxLength: { value: 255, message: "Bạn Nhập email quá dài" } })} />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type} style={{ color: 'red' }}>{message}</p>
                            ))
                        }
                    />
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Password :</label>
                    <input type="password" placeholder="password" className="input-txt" {...register('password', { required: "Bạn chưa nhập password", maxLength: { value: 255, message: "Bạn Nhập password quá dài" } })} />
                    <ErrorMessage
                        errors={errors}
                        name="password"
                        render={({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type} style={{ color: 'red' }}>{message}</p>
                            ))
                        }
                    />
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Password :</label>
                    <input type="password" placeholder="c_password" className="input-txt" {...register('c_password', { required: "Bạn chưa nhập password", maxLength: { value: 255, message: "Bạn Nhập password quá dài" } })} />
                    <ErrorMessage
                        errors={errors}
                        name="c_password"
                        render={({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type} style={{ color: 'red' }}>{message}</p>
                            ))
                        }
                    />
                </div>
                <div className="content__box-product-add-field">
                    <label htmlFor>Phân Quyền :</label>
                    <select {...register("role")} className="select-value">
                        {props.roles && props.roles.map(
                            (item, index) => {
                                return (
                                    <option key={index} value={item.name}>{item.name}</option>
                                );
                            })}
                    </select>
                </div>
                <div className="content__box-product-add-btn">
                    <button type="submit" className="content__box-product-btn">Update user</button>
                </div>
            </form>
        );
    };
    return <div>{editUserFrom()}</div>
}

export default EditUser
