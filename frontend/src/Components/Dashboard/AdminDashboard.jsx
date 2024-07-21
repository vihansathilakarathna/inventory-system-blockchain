import React from 'react';
import "./Dashboard.css";

const cardData = [
  {
    title: "Total Item",
    text: "10",
    link: "/admin/inventory",
    linkText: "View"
  },
  {
    title: "Low Stock",
    text: "20",
    link: "/admin/stock",
    linkText: "View"
  },
  {
    title: "Total Sales",
    text: "30",
    link: "/admin/sales",
    linkText: "View"
  },
  {
    title: "Total Orders",
    text: "10",
    link: "/admin/orders",
    linkText: "View"
  },
  {
    title: "Total Clients",
    text: "20",
    link: "/admin/clients",
    linkText: "View"
  },
  
];

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
  return (
    <div className="container mt-4" >
      <div className="row" style={{marginTop: "100px"}}>
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title" style={{color: colorsTitle[index % colorsTitle.length]}}>{card.title}</h5>
                <p className="card-text" style={{color: colorsText[index % colorsText.length]}}>{card.text}</p>
                <a href={card.link} className="btn btn-primary">{card.linkText}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
