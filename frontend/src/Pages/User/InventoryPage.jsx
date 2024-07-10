import React from "react";
import UserNavbar from "../../Components/Navbar/UserNavbar";
import Inventory from "../../Components/User/Inventory/Inventory";

export default function InventoryPage() {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "250px 1fr",
    height: "100vh",
  };

  const contentStyle = {
    padding: "100px 20px 20px 0",
  };
  return (
    <div style={containerStyle}>
      <div>
        <UserNavbar />
      </div>
      <div style={contentStyle}>
        <Inventory />
      </div>
    </div>
  );
}
