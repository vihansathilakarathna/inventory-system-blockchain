import React from "react";
import "./Stock.css";

export default function Stock() {
  const totalItemsData = [
    {
      item: "Item 1",
      quantity: 400
    },
    {
      item: "Item 2",
      quantity: 700
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
              <th>Item</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {totalItemsData.map((item, index) => (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
