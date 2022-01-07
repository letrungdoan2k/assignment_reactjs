import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { readCategory } from "../../../api/categoryAPI";

const EditCategory = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    let navigate = useNavigate();

    //
    const { id } = useParams();
    const [categories, setCategories] = useState({});
    //
    useEffect(() => {
        readCategory(id).then((response) => {
          setCategories(response.data);
          reset(response.data);
        });
      }, [id, reset]);

    const onSubmit = (data) => {
        props.onUpdate(data);
        navigate("/admin/category", { replace: (true) });
    };

    const EditCategoryForm = () => {
        return (
            <form onSubmit={handleSubmit(onSubmit)} >
                <h3 className="content__box-product-add-name">Thêm danh mục</h3>
                <div className="content__box-product-add-field">
                    <label htmlFor>Tên danh mục :</label>
                    <input type="text" placeholder="tên danh mục" className="input-txt" {...register("name", { required: true })} />
                    {errors.name && <p>Field is required</p>}
                </div>
                <div className="content__box-product-add-btn" style={{ width: '552px' }}>
                    <button className="content__box-product-btn">Sửa danh mục</button>
                    <button className="remove_button" onClick={() => navigate(-1)}>Quay lai</button>
                </div>
            </form>
        );
    };

    return (
        <div><EditCategoryForm /></div>
    );
};
export default EditCategory;