import React from 'react'

const Cart = (props) => {
    const cart = props.cart
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",cart)
    return (
        <div>
            <div className="app__container" style={{ marginTop: '148px' }}>
                <div className="grid wide">
                    <table>
                        <thead>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                        </thead>
                        <tbody>
                            {
                            props.cart.length >=1 && props.cart.map((item, index) => {
                                return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price_sale ? item.price_sale : item.price}</td>
                                </tr>
                                )
                            })
                            }
                            <br />
                            <tr>
                                Tổng Giá: 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart
