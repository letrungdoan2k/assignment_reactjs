import { useEffect, useState } from "react";
import { dashboard } from "../../../api/dashboard";

const Dashboard = () => {
  const [count, setCount] = useState([]);
  console.log(count);
  useEffect(() => {
    dashboard().then(response => setCount(response.data))
  }, []);

    return (
      count &&
        <div className="content__box-product ">
        <h3 className="content__box-header">Thống kê</h3>
        <div className="row col row-2">
          <div className="l-3 box-represent">
            <i className="fas fa-sitemap icon-represent" />
            <div className="content__box-text">
              <span className="content__box-title">Danh mục SP</span>
              <span className="content__box-count">
              {count.category}
              </span>
            </div>
          </div>
          <div className="l-3 box-represent">
            <i className="fas fa-shopping-bag icon-represent" />
            <div className="content__box-text">
              <span className="content__box-title">Số sản phẩm</span>
              <span className="content__box-count">
                {count.product}
              </span>
            </div>
          </div>
          <div className="l-3 box-represent">
            <i className="fas fa-gem icon-represent" />
            <div className="content__box-text">
              <span className="content__box-title">Số thương hiệu</span>
              <span className="content__box-count">
                {count.brand}
              </span>
            </div>
          </div>
          <div className="l-3 col box-represent">
            <i className="fas fa-users icon-represent" />
            <div className="content__box-text">
              <span className="content__box-title">Tài khoản User</span>
              <span className="content__box-count">
               {count.user}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Dashboard;