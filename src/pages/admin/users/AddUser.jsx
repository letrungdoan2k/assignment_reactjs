import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from "react-router";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { signup } from "../../../api/authAPI";

const AddUser = (props) => {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: 'all' });

    const onSubmit = (data) => {
        signup(data)
            .then((response) => {
                toast.success("Đăng ký thành công");
                props.onAdd(data)
                navigate("/admin/users", { replace: true })
            })
    }

    const addProductFrom = () => {
        return (
            <form className="content__box-product-add" method="POST" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="content__box-product-add-name">Thêm user</h3>                
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
                <div className="content__box-product-add-btn">
                    <button className="content__box-product-btn" name="btnSend">Thêm user</button>
                </div>
            </form>
        );
    };
    return <div>{addProductFrom()}</div>


};
export default AddUser;