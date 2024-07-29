import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function History() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/api/order/getOrders')
            .then(response => {
                setOrders(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{margin: "8% 0"}}>
            <h4 style={{textAlign: "left"}}>Order History</h4>
            {orders.length > 0 ? (
                <table style={{ width: "95%"}}>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Items</th>
                            <th>Date</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.orderID}</td>
                                <td>
                                    {order.items?.length > 0 ? (
                                        order.items.map((item, idx) => (
                                            <div key={idx}>
                                                {item.title} (x{item.quantity})
                                            </div>
                                        ))
                                    ) : (
                                        'No items'
                                    )}
                                </td>
                                <td>{new Date(order.date).toLocaleString()}</td>
                                <td>${order.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No orders found</p>
            )}
        </div>
    );
}
