import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { detailProduct, relatedProducts, topSaleProduct } from '../../api/productAPI';
import NumberFormat from 'react-number-format';
import { isAuthenticate } from '../../authenticate';
import { createCart } from '../../api/cartAPI';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";

const ProductDetail = (props) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [saleProduct, setSaleProduct] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);

  const auth = isAuthenticate();
  const addCart = (id) => {
    if (auth) {
      const quantity = document.querySelector('#quantity').value
      const newCart = {product: id, user: auth.id, quantity: quantity}
      console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbb",quantity)
      // createCart(newCart).then(
        // toast.success("Thêm thành công"),
        props.cartProduct(product, {quantity: quantity})
      // );
    } else {
      navigate("/signin", { replace: true })
    }
  }

  useEffect(() => {
    relatedProducts(id).then((response) => setRelatedProduct(response.data))
  }, []);

  useEffect(() => {
    topSaleProduct().then((response) => {
      setSaleProduct(response.data);
    });
  }, []);

  useEffect(() => {
    detailProduct(id).then((response) => setProduct(response.data))
  }, [id]);



  return (
    product &&
    <div className="grid wide" style={{marginTop: '148px'}}>
      <div className="row col content__detail-product">
        <section className="l-5 col">
          <div className="content__product-img-group">
            <div className="l-12 col content__product-img-main-box">
              <img src={product.image} alt="" className="content__product-img-main" />
            </div>
          </div>
        </section>
        <section className="l-7 col">
          <div className="content__product-title-group">
            <h1 className="content__product-title-name">{product.name}</h1>
            <p className="content__product-title-price">Thương hiệu: {props.brand.map((brand, index) => { if (brand.id == product.brand_id) { return brand.name } })}</p>
            <p className="content__product-title-price">Giá:  <span className="price-note"><span className="price_color"><NumberFormat value={product.price_sale ? product.price_sale : product.price} displayType={'text'} thousandSeparator={true} /> đ</span></span>
            </p>
            <div className="content__product-title-quantity-box">
              <span className="content__product-title-quantity-title">Số lượng :</span>
              <input type="number" className="content__product-title-quantity-input" defaultValue={1} style={{border: '1px solid #ccc'}} id="quantity"/>
            </div>
            <div>
            </div>
            <div className="content__product-title-grift">
              <div className="content__product-title-grift-event">
                <span className="content__product-title-grift-note">
                  <i className="fas fa-gift" />
                  Tặng 100.000 
                </span> mua hàng tại website sShop.vn, áp dụng khi mua Online tại Tp.HCM, Tp. Nha Trang, Tp. Phan
                Thiết và 1 số khu vực khác.
              </div>
              <div className="content__product-title-grift-event">
                <span className="content__product-title-grift-note">
                  <i className="fas fa-gift" />
                  Giảm giá đến 50% 
                </span>
                cho những khách hàng sử dụng gói mua sắm tiện tích.
              </div>
              <div className="content__product-title-grift-event">
                <span className="content__product-title-grift-note">
                  <i className="fas fa-shipping-fast" />
                  Miễn phí 
                </span>
                giao hàng cho những khách hàng với tiền thanh toán lớn hớn 1.000.000 đ trên toàn quốc.
              </div>
            </div>
            <a href="#" className="content__product-title-btn">
              <i className="fas fa-shopping-cart" />
              <span className="content__product-title-btn-txt" onClick={() => addCart(product.id)}>add to cart</span> {/*onClick={() => addCart(id)}*/}
            </a>
          </div>
        </section>
      </div>
      {/* chi tiết sản phẩm */}
      <div className="row col row-detail-title">
        <section className="l-9 col">
          <div className="content__detail-group">
            <div className="content__detail-group-box">
              <h1 className="content__detail-header">CHI TIẾT SẢN PHẨM</h1>
              <p className="content__detail-brand">
                <span className="content__detail-title-name">Thương hiệu: </span>
                <span className="content__detail-main">
                  {props.brand.map((brand, index) => { if (brand.id == product.brand_id) { return brand.name } })}
                </span>
              </p>
              {/* <p className="content__detail-date">
                <span className="content__detail-title-name">Bảo hành: </span>
                <span className="content__detail-main">////</span>
              </p> */}
            </div>
            <div className="content__detail-group-box2">
              <h1 className="content__detail-header">MÔ TẢ SẢN PHẨM</h1>
              <div className="content__detail-name">
                <span className="content__detail-main-box">
                  <span className="content__detail-title-name fix-name">Tên sản phẩm:</span>
                  {product.name}
                </span>
              </div>
              <div className="content__detail-description">
                <span className="content__detail-title-des">Mô tả: </span>
                <p className="content__detail-main">{product.description}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="l-3 col">
          <div className="content__sidebar-prod">
            <ul className="content__sidebar-prod-list">
              <div className="content__sidebar-prod-list-box">
                <img src="../../assets/img/sale.jpg" alt="" width="80px" height="60px" />
                <h2 className="content__sidebar-prod-list-header">Sản phẩm giảm giá</h2>
              </div>
              {saleProduct && saleProduct.map((item, index) => {
                return (
                  <li className="content__sidebar-prod-item" key={index}>
                    <a href={`/product/${item.id}`} className="content__sidebar-prod-item-box">
                      <img src={item.image} alt="" className="content__sidebar-prod-img" />
                      <div className="content__sidebar-prod-item-sub">
                        <h3 className="content__sidebar-prod-name">
                          {item.name}
                        </h3>
                        <span className="content__sidebar-prod-price"><span className="price_color"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} /> đ</span></span>
                        <span className="content__sidebar-prod-brand">Giảm giá: <span className="price_color">{item.sale} %</span></span>
                      </div>
                    </a>
                  </li>
                )
              })}

            </ul>
          </div>
        </section>
      </div>
      {/* danh sách đã comment */}
      <h1 className="content__cmt-header fix">Bình luận sản phẩm</h1>
      {/* comment */}
      <div className="row col">
        <section className="l-9 col">
          <div className="content__cmt-box-write">
            <form action className="content__cmt-form" method="POST" id="comment">
              <div className="content__cmt-form-box">
                <div className="content__cmt-form-avatar">
                  <img src="" alt="" class="content__cmt-form-img" />
                </div>
                <div className="content__cmt-form-func">
                  <textarea name="content" id cols={30} rows={10} className="content__cmt-form-txt" placeholder="viết bình luận" defaultValue={""} />
                  <div className="content__cmt-form-group">
                    <button className="content__cmt-form-btn" name="btnComment">Bình luận</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      {/* */}
      {/*?php foreach ($binhLuan as $comment) : ?*/}
      <div className="row col box-print-comment">
        <section className="l-9 col">
          <div className="content__cmt-box-print">
            <div className="content__cmt-form-avatar">
              <img src="img/<?php echo $comment['avatar'] ?>" alt="" className="content__cmt-form-img" />
            </div>
            <div className="content__cmt-form-info">
              <a href className="content__cmt-form-info-name">
                {/*?php echo $comment['name'] ?*/}
              </a>
              <p className="content__cmt-form-info-param">
                {/*?php echo $comment['noi_dung'] ?*/}
              </p>
              <div className="content__cmt-form-info-box">
                <span className="content__cmt-form-info-date">
                  {/*?php echo $comment['thoi_gian'] ?*/}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <h1 className="content__product-name-event fix">Các sản phẩm liển quan</h1>
      <div className="row col" style={{ margin: '20px 0' }}>
        {
          relatedProduct &&
          relatedProduct.map((item, index) => {
            return (
              <section className="l-2 col">
                <div className="content__product-sale">
                  <a href={`/product/${item.id}`} className="content__product-sale-link row__general-product">
                    <div className="content__product-sale-box">
                      <img src={item.image} alt="" className="content__product-sale-img" />
                    </div>
                    <p className="content__product-sale-name">{item.name}</p>
                    <p className="content__product-general-price">Giá: <span className="price_color">
                      <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} /> đ
                    </span></p>
                    <span className="content__product-general-status">Trạng thái:
                    </span>
                  </a>
                </div>
              </section>
            )
          })
        }
        {/* {relatedProduct && relatedProduct.map((item, index) => {
          
        })} */}

      </div>
    </div>
  );
}
export default ProductDetail;