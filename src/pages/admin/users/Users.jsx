import { Link } from "react-router-dom";
import { submit } from "../Confirm";

const Users = (props) => {
    console.log(props.user, "aaaaaaaccccccccccccc")
    return (
        <div className="content__box-product ">
            <h3 className="content__box-header">Danh sách khách hàng</h3>
            <Link to="add" className="content__box-add">Thêm user</Link>
            <table className="content__box-product-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Phân quyền</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {props.user && props.user.map((item, index) => {
                        return (
                        <tr key={index}>
                            <td width="100px">{index + 1}</td>
                            <td className="td-name">{item.name}</td>
                            <td className="td-name">{item.email}</td>
                            <td className="td-name"> admin </td>
                            <td className="td-function" width="200px">
                                <Link to={`${item.id}/edit`} className="link-function btn-repair">Edit</Link>
                                <button className="remove_button" onClick={() => submit(item.id, props.onRemove)}>Remove</button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default Users;