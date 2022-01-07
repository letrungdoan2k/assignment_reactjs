import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddCategory = ({ onAdd }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        // if (response.data.success != false) {
        //     toast.success("Thêm thành công")
        //     navigate("/admin/product", { replace: true })
        //     onAdd(newData)
        // } else {
        //     const err = response.data.errors
        //     setError(err)
        // }
        onAdd(data);
        
        navigate("/admin/category", { replace: (true) });
    };

    const AddCategoryForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <h3 className="content__box-product-add-name">Thêm danh mục</h3>
                <div className="content__box-product-add-field">
                    <label htmlFor>Tên danh mục :</label>
                    <input type="text" placeholder="tên danh mục" className="input-txt" {...register("name", { required: true })} />
                    {errors.name && <p style={{color: 'red'}}>Bạn cần nhập tên danh mục</p>}
                </div>
                <div className="content__box-product-add-btn" >
                    <button className="content__box-product-btn">Thêm danh mục</button>
                </div>
            </form>
        );
    };

    return (
        <div><AddCategoryForm /></div>
    );
};
export default AddCategory;