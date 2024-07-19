import React from "react";
import "./Sales.css";

export default function Sales() {
  const totalItemsData = [
    {
      orderID: 1,
      item: "djkhlk",
      quantitySold: 200,
      date: "2/24",
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
              <th>Order ID</th>
              <th>Item</th>
              <th>Quantity Sold</th>
              <th>Date</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {totalItemsData.map((item, index) => (
              <tr key={index}>
                <td>{item.orderID}</td>
                <td>{item.item}</td>
                <td>{item.quantitySold}</td>
                <td>{item.date}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
