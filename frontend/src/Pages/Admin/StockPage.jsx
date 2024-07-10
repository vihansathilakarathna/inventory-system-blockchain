import React from "react";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";
import Stock from "../../Components/Admin/Stock/Stock";

export default function StockPage() {
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
          <Stock />
        </div>
      </div>
    </div>
  );
}
