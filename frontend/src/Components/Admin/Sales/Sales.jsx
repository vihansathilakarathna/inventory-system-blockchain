import React from "react";
import "./Sales.css";

export default function Sales() {
  const totalItemsData = [
    {
      date: "July 2",
      item: "djkhlk",
      quantity: 200,
      total: 500,
    },
  ];
  return (
    <div>
      <p className="ai-title">Sales Management</p>

      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {totalItemsData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.item}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
