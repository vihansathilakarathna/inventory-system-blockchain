import React from "react";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";
import Reports from "../../Components/Admin/Reports/Reports";

export default function ReportsPage() {
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
          <Reports />
        </div>
      </div>
    </div>
  );
}
