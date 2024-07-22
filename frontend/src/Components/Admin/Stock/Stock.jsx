import React, { useState, useEffect } from "react";
import "./Stock.css";
import axios from "axios";

export default function Stock() {
  const [totalItemsData, setTotalItemsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/items/getAllItems")
      .then((response) => {
        setTotalItemsData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the items!", error);
      });
  }, []);
  
  return (
    <div>
      <p className="ai-title">Stock Management</p>
     
      <div>
        <table style={{width: "95%"}}>
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
