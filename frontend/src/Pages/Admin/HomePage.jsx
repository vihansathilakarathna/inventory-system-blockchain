import React from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";
export default function HomePage() {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "250px 1fr",
    height: "100vh",
  };

  const contentStyle = {
    padding: "20px 20px 20px 0",
  };
  return (
    <div style={containerStyle}>
      <div>
      <AdminNavbar />
      </div>
      <div style={contentStyle}>
        <Dashboard />
      </div>
    </div>
  );
}
