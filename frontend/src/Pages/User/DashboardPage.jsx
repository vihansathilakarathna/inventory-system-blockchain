import React from "react";

import Dashboard from "../../Components/Dashboard/Dashboard";
import UserNavbar from "../../Components/Navbar/UserNavbar";

export default function DashboardPage() {
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
        <UserNavbar />
      </div>
      <div style={contentStyle}>
        <Dashboard />
      </div>
    </div>
  );
}
