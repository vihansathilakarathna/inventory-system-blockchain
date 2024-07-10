import React from "react";
import Sales from "../../Components/Admin/Sales/Sales";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";

export default function SalesPage() {
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
        <Sales />
      </div>
    </div>
  );
}
