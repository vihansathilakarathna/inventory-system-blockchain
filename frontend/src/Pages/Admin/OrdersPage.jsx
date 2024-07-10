import React from "react";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";
import Orders from "../../Components/Admin/Orders/Orders";

export default function OrdersPage() {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "250px 1fr",
    height: "100vh",
  };

  const contentStyle = {
    padding: "80px 50px 50px 0",
  };
  return (
    <div>
      <div style={containerStyle}>
        <div>
          <AdminNavbar />
        </div>
        <div style={contentStyle}>
          <Orders />
        </div>
      </div>
    </div>
  );
}
