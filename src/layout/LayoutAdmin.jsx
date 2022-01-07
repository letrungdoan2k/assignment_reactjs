import { Link, Outlet } from "react-router-dom";
import Header from "../pages/admin/layout/Header";
import Footer from "../pages/admin/layout/Footer";
import Nav_bar from "../pages/admin/layout/Nav_bar";

function LayoutAdmin() {
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper__group">
          <Header />
          <div className="wrapper__content">
            <Nav_bar />
            <div className="content__box">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>

  );
};
export default LayoutAdmin;