import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddBrand = ({onAdd}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        onAdd(data);
        navigate("/admin/brand", { replace: (true) });
    };

    const AddBrandForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <h3 className="content__box-product-add-name">Thêm thương hiệu</h3>
                <div className="content__box-product-add-field">
                    <label htmlFor>Tên thương hiệu :</label>
                    <input type="text" placeholder="tên thương hiệu" className="input-txt" {...register("name", { required: "Bạn chưa nhập tên thương hiệu" })} />
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
                </div>
                <div className="content__box-product-add-btn" >
                    <button className="content__box-product-btn">Thêm thương hiệu</button>
                </div>
            </form>
        );
    };
    return ( <div><AddBrandForm /></div> );
};
export default AddBrand;