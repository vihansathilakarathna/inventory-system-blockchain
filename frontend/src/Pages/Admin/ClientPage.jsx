import React, { useState } from "react";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";
import Client from "../../Components/Admin/Client/Client";

export default function ClientPage() {
    const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: isCollapsed ? "100px 1fr" : "200px 1fr",
    height: "100vh",
    transition: "grid-template-columns 0.3s ease",
  };

  const contentStyle = {
    marginLeft: isCollapsed ? "100px" : "200px",
    transition: "margin-left 0.3s ease",
  };
  return (
    <div style={containerStyle}>
      <div>
        <AdminNavbar onCollapseToggle={handleCollapseToggle} />
      </div>
      <div>
        <Client style={contentStyle} />
      </div>
    </div>
  )
}
