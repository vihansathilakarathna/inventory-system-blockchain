import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Dashboard.css";
import InventoryLineGraph from './InventoryLineGraph';

const colorsTitle = [
  "#ff6347", 
  "#4682b4", 
  "#32cd32", 
  "#708871", 
  "#ffa500", 
];

const colorsText = [
  "#990000", 
  "#000080",
  "#008080",
  "#133337",
  "#E76F51", 
];

export default function AdminDashboard() {
  const [counts, setCounts] = useState({ totalItems: 0, totalOrders: 0, totalClients: 0 });
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:3001/api/items/getAllItems')
      .then(response => setItemsData(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [itemResponse, orderResponse, clientResponse] = await Promise.all([
          axios.get('http://localhost:3001/api/items/getAllItemsCount'),
          axios.get('http://localhost:3001/api/order/getOrdersCount'),
          axios.get('http://localhost:3001/api/users/getUsersCount')
        ]);

        setCounts({
          totalItems: itemResponse.data.itemCount,
          totalOrders: orderResponse.data.orderCount,
          totalClients: clientResponse.data.userCount
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchCounts();
  }, []);

  const cardData = [
    {
      title: "Total Items",
      text: counts.totalItems,
      link: "/admin/inventory",
      linkText: "View"
    },
    {
      title: "Total Orders",
      text: counts.totalOrders,
      link: "/admin/orders",
      linkText: "View"
    },
    {
      title: "Total Clients",
      text: counts.totalClients,
      link: "/admin/clients",
      linkText: "View"
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row" style={{ marginTop: "100px" }}>
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title" style={{ color: colorsTitle[index % colorsTitle.length] }}>{card.title}</h5>
                <p className="card-text" style={{ color: colorsText[index % colorsText.length] }}>{card.text}</p>
                <a href={card.link} className="btn btn-primary">{card.linkText}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <InventoryLineGraph itemsData={itemsData}/>
    </div>
  );
}
