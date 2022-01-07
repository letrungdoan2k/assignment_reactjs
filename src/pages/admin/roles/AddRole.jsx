import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createRole } from "../../../api/role";

const AddRole = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        createRole(data)
            .then((response) => {
                toast.success("Đăng ký thành công");
                props.onAdd(data)
                navigate("/admin/roles", { replace: true })
            })
    };

    const AddCategoryForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <h3 className="content__box-product-add-name">Thêm Role</h3>
                <div className="content__box-product-add-field">
                    <label htmlFor>Name :</label>
                    <input type="text" placeholder="tên role" className="input-txt" {...register("name", { required: true })} />
                    {errors.name && <p style={{color: 'red'}}>Bạn cần nhập tên role</p>}
                </div>
                <div className="content__box-product-add-btn" >
                    <button className="content__box-product-btn">Thêm</button>
                </div>
            </form>
        );
    };

    return (
        <div><AddCategoryForm /></div>
    );
};
export default AddRole;