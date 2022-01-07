import { useState } from "react";
import { Link } from "react-router-dom";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { submit } from "../Confirm";
import NumberFormat from 'react-number-format';
import { Pagination } from 'antd';

const ProductsManager = (props) => {
  const onChange = (page) => {
    props.numberPage(page)
  }
  return (
    <div>
      <div className="content__box-product ">
        <h3 className="content__box-header">Danh sách sản phẩm</h3>
        <Link to="add" className="content__box-add">Thêm sản phẩm</Link>
        <table className="content__box-product-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Danh mục</th>
              <th>Thương hiệu</th>
              <th>Ảnh</th>
              <th>Giá sản phẩm</th>
              <th>Giá Sale</th>
              <th>Số lượng</th>
              <th>Chức năng</th>
            </tr>
          </thead>

          <tbody>
            {props.product && props.product.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{
                    props.category.map((cate, index) => {
                      if (cate.id == item.cate_id) {
                        return cate.name;
                      }
                    })
                  }</td>
                  <td>{
                    props.brand.map((brand, index) => {
                      if (brand.id == item.brand_id) {
                        return brand.name;
                      }
                    })
                  }</td>
                  <td className="td-img">
                    <img src={item.image} alt="" with={80} />
                    {/* <img src={"http://localhost:8000/storage/"+item.image } alt="" with={80}/> */}
                  </td>
                  <td>
                  <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} /> đ
                  </td>
                  <td>                    
                  
                  <NumberFormat value={item.price_sale} displayType={'text'} thousandSeparator={true} />{ item.price_sale && ` đ`}
                  
                    {/* {item.price_sale} */}
                  </td>
                  <td>{item.quantity}</td>
                  <td className="td-function">
                    <Link to={`${item.id}/edit`} className="link-function btn-repair">Edit</Link>
                    <button className="remove_button" onClick={() => submit(item.id, props.onRemove)}>Remove</button>
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>
        <br />
        <div><Pagination onChange={onChange} defaultCurrent={1} pageSize={props.per_page ? props.per_page : 1} total={props.total ? props.total : 1} /></div>
      </div>
    </div>
  );
};
export default ProductsManager;