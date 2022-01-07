import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Carousel } from 'antd';
import { likeProduct, topSaleProduct } from "../../api/productAPI";
import NumberFormat from 'react-number-format';


const Home = ({ products }) => {
  const [product, setProduct] = useState([]);
  const [topproduct, setTopProduct] = useState([]);
  useEffect(() => {
    topSaleProduct().then((response) => {
      setProduct(response.data);
    });
  }, []);
  useEffect(() => {
    likeProduct().then((response) => {
      setTopProduct(response.data);
    });
  }, []);

  const image__slide = {
    width: '100%',
    height: '100%',
  }
  const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div className="app__container" style={{marginTop: '148px'}}>
      <div className="grid wide">
        <div className="row sm-gutter slide-home">
          <div className="col l-8">
            <div className="slide-show__img" />
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}><img style={image__slide} src="https://thietkehaithanh.com/wp-content/uploads/2019/01/thietkehaithanh-banner-laptop-800x300.png" alt="" /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img style={image__slide} src="https://cdn.tgdd.vn/hoi-dap/1355217/banner-tgdd-800x300.jpg" alt="" /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img style={image__slide} src="https://cdn.tgdd.vn/Files/2015/12/03/751514/tgdd-online-friday-800-300-1.jpg" alt="" /></h3>
              </div>
            </Carousel>
          </div>
          <div className="col l-4 slide-show__banner">
            <div className="banner__slide">
              <img className="banner__img" src="https://donghothuysy.vn/images/slideshow/2020/01/17/compress/fc_1579234917.jpg" alt="" />
            </div>
            <div className="banner__slide">
              <img src="http://luxurytime.in/wp-content/uploads/2018/09/hublot_banner.jpg" alt="" className="banner__img" />
            </div>
          </div>
        </div>
        <h1 className="content__product-name-event fix">Sale</h1>
        <br />
        <div className="row col">
          {product && product.map((item, index) => {
            return (
              <section className="l-2 col" key={index}>
                <div className="content__product-sale">
                  <Link to={`product/${item.id}`} className="content__product-sale-link">
                    <div className="content__product-sale-box" >
                      <img src={item.image} alt=""className="content__product-sale-img"/>
                    </div>
                    <p className="content__product-sale-name">{item.name}</p>
                    <p className="content__product-sale-price">Giá: <span className="price_color"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} /> đ</span></p>
                    <span className="content__product-sale-status">Trạng thái:
                      còn hàng
                    </span>
                    <div className="content__product-box-sale">
                      <p className="content__product-box-sale-price">{item.sale}%</p>
                      <p className="content__product-box-sale-txt">Giảm</p>
                    </div>
                  </Link>
                </div>
              </section>
            )
          })}
        </div>

        <h1 className="content__product-name-event fix">Top 10 yêu thích</h1>
        <div className="row col">
          {topproduct && topproduct.map((item, index) => {
            return (
              <section className="l-2 col content__product-general">
                <div className="content__product-sale">
                <Link to={`/product/${item.id}`} className="content__product-sale-link row__general-product">
                    <div className="content__product-sale-box">
                      <img src={item.image} alt="" className="content__product-sale-img" />
                    </div>
                    <p className="content__product-sale-name">{item.name}</p>
                    <p className="content__product-general-price">Giá: <span className="price_color"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} /> đ</span></p>
                    <span className="content__product-general-status">View:
                      Lượt xem
                    </span>
                  </Link>
                </div>
              </section>
            )
          })}
        </div>
        <h1 className="content__product-name-event fix">Sản Phẩm mới</h1>
        <div className="row col">
          {products && products.map((item, index) => {
            return (
              <section className="l-2 col content__product-general" key={index}>
                <div className="content__product-sale">
                  <Link to={`product/${item.id}`} className="content__product-sale-link row__general-product">
                    <div className="content__product-sale-box">
                      <img src={item.image} alt="" className="content__product-sale-img" />
                    </div>
                    <p className="content__product-sale-name">{item.name}</p>
                    <p className="content__product-general-price">Giá: <span className="price_color"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} /> đ</span></p>
                    <span className="content__product-general-status">Trạng thái:
                      còn hàng
                    </span>
                  </Link>
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;