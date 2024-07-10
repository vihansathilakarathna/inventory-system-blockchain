import React from "react";
import "./Stock.css";

export default function Stock() {
  const totalItemsData = [
    {
      orderID: 1,
      stock: 200,
      status: "Low",
    },
    {
      orderID: 2,
      stock: 400,
      status: "Medium",
    },
  ];
  return (
    <div>
      <p className="ai-title">Stock Management</p>
      <div className="ai-button-div">
        <button className="ai-button">Restock Alerts</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Current Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {totalItemsData.map((item, index) => (
              <tr key={index}>
                <td>{item.orderID}</td>
                <td>{item.stock}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
