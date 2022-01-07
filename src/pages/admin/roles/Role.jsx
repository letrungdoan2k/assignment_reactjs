import React from 'react'
import { Link } from 'react-router-dom'

const Role = (props) => {
    return (
        <div className="content__box-product ">
            <h3 className="content__box-header">Danh sách khách hàng</h3>
            <Link to="add" className="content__box-add">Thêm user</Link>
            <table className="content__box-product-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.role && props.role.map((item, index) => {
                        return (
                        <tr key={index}>
                            <td width="100px">{index + 1}</td>
                            <td className="td-name">{item.name}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Role
