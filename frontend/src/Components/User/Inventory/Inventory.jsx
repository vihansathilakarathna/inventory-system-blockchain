import React, { useState } from "react";
import "./Inventory.css";
export default function Inventory() {
  const [activeTab, setActiveTab] = useState("totalItems");

  const totalItemsData = [
    {
      item: "Item 1",
      quantity: 100,
    },
    {
      item: "Item 2",
      quantity: 150,
    },
    {
      item: "Item 5",
      quantity: 120,
    },
  ];

  const lowStockData = [
    {
      item: "Item 3",
      quantity: 5,
    },
    {
      item: "Item 4",
      quantity: 2,
    },
  ];

  return (
    <div className="ui-div">
      <div className="ui-topbar">
        <p
          className={activeTab === "totalItems" ? "active-tab" : ""}
          onClick={() => setActiveTab("totalItems")}
        >
          Total Items
        </p>
        <div className="ui-hr" />
        <p
          className={activeTab === "lowStock" ? "active-tab" : ""}
          onClick={() => setActiveTab("lowStock")}
        >
          Low Stock
        </p>
      </div>

      <div className="ui-content">
        {activeTab === "totalItems" && (
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
        )}
        {activeTab === "lowStock" && (
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {lowStockData.map((item, index) => (
                <tr key={index}>
                  <td>{item.item}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
