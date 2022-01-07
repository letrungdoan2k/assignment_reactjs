import { Link } from "react-router-dom";
import { submit } from "../Confirm";
const Categories = ({ category, onRemmove }) => {
      return (
        <div className="content__box-product ">
          <h3 className="content__box-header">Các danh mục</h3>
          <Link to="add" className="content__box-add">Thêm danh mục</Link>
          <table className="content__box-product-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên danh mục</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {category && category.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <Link to={`${item.id}/edit`} className="link-function btn-repair">Edit</Link>
                      <button className="remove_button" onClick={() => submit(item.id, onRemmove)}>Remove</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
};
export default Categories;