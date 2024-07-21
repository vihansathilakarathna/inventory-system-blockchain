import React, {useState} from "react";
import Inventory from "../../Components/Admin/Inventory/Inventory";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";

export default function InventoryAdminPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: isCollapsed ? "60px 1fr" : "100px 1fr",
    height: "100vh",
    transition: "grid-template-columns 0.3s ease",
  };

  const contentStyle = {
    marginLeft: isCollapsed ? "60px" : "100px",
    transition: "margin-left 0.3s ease",
  };
  return (
    <div style={containerStyle}>
      <div>
        <AdminNavbar onCollapseToggle={handleCollapseToggle}/>
      </div>
      <div style={contentStyle}>
        <Inventory />
      </div>
    </div>
  );
}
