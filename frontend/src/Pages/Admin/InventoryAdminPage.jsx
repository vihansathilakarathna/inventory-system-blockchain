import React from "react";
import Inventory from "../../Components/Admin/Inventory/Inventory";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";

export default function InventoryAdminPage() {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "250px 1fr",
    height: "100vh",
  };

  const contentStyle = {
    padding: "80px 50px 50px 0",
  };
  return (
    <div style={containerStyle}>
      <div>
        <AdminNavbar />
      </div>
      <div style={contentStyle}>
        <Inventory />
      </div>
    </div>
  );
}
