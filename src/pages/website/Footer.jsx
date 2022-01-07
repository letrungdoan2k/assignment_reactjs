const Footer = () => {
    return (
      <div>
        <footer className="footer">
        <div className="grid-footer-top">
          <div className="grid wide footer-top__boder">
            <div className="row">
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href className="footer-item__link">Trung tâm trợ giúp</a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">Shop</a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">Hướng dẫn mua hàng</a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading">Giới thiệu</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href className="footer-item__link">Giới thiệ</a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">tuyển dụng</a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">điều khoản</a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading">Danh mục</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href className="footer-item__link">Trung tâm trợ giúp</a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">Shop</a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">Hướng dẫn mua hàng</a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <h3 className="footer__heading">Theo dõi</h3>
                <ul className="footer-list">
                  <li className="footer-item">
                    <a href className="footer-item__link">
                      <i className="footer-item__icon fab fa-facebook" />
                      Facebook</a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">
                      <i className="footer-item__icon fab fa-instagram" />
                      Instagram</a>
                  </li>
                  <li className="footer-item">
                    <a href className="footer-item__link">
                      <i className="footer-item__icon fab fa-linkedin" />
                      LinkedIn</a>
                  </li>
                </ul>
              </div>
              <div className="col l-2-4 m-8 c-12">
                <h3 className="footer__heading">vào cửa hàng trên ứng dụng</h3>
                <div className="footer__dowload">
                  <img src="./assets/img/qr_code.png" alt="Dowload QR" className="footer__dowload-qr" />
                  <div className="footer__dowload-apps">
                    <a href="#" className="footer__dowload-app-link">
                      <img src="./assets/img/google_play.png" alt="Google Play" className="footer__dowload-app-img" />
                    </a>
                    <a href="#" className="footer__dowload-app-link">
                      <img src="./assets/img/app_store.png" alt="App Store" className="footer__dowload-app-img" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-footer-bottom">
          <div className="grid wide">
            <div className="row row-footer-bottom">
              <div className="col l-3 m-4 c-6 footer__heading-bottom">
                <a href="#" className="footer__heading-bottom-link">Chính sách bảo mật</a>
              </div>
              <div className="col l-3 m-4 c-6 footer__heading-bottom">
                <a href="#" className="footer__heading-bottom-link">Quy chế hoạt động</a>
              </div>
              <div className="col l-3 m-4 c-12 footer__heading-bottom">
                <a href="#" className="footer__heading-bottom-link">Chính sách vận chuyển</a>
              </div>
              <div className="col l-3 m-4 c-6 footer__heading-bottom">
                <a href="#" className="footer__heading-bottom-link">Chính sách chả hàng và hoàn tiền</a>
              </div>
            </div>
            <div className="row">
              <div className="col l-12 m-12 c-12 footer-bottom_img">
                <a href="#">
                  <img src="./assets/img/20150827110756-dadangky.png" alt="" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col l-12 m-12 c-12 footer-bottom_text">Công ty TNHH Shopee</div>
            </div>
            <div className="row">
              <div className="col l-12 m-12 c-12 footer-bottom_text">Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place,
                số 29 đường Liễu
                Giai,
                Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 -
                Email:
                cskh@hotro.shopee.vn</div>
            </div>
            <div className="row">
              <div className="col l-12 m-12 c-12 footer-bottom_text">Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức
                Trí - Điện thoại
                liên
                hệ: 024 73081221 (ext 4678)</div>
            </div>
            <div className="row">
              <div className="col l-12 m-12 c-12 footer-bottom_text">Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch
                &amp; Đầu tư TP Hà Nội
                cấp
                lần đầu ngày 10/02/2015</div>
            </div>
            <div className="row">
              <div className="col l-12 m-12 c-12 footer-bottom_text">© 2015 - Bản quyền thuộc về Công ty TNHH
                Shopee</div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    );
};
export default Footer;