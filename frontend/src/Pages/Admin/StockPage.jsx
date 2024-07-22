import React, {useState} from "react";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";
import Stock from "../../Components/Admin/Stock/Stock";

export default function StockPage() {
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
    <div>
      <div style={containerStyle}>
        <div>
          <AdminNavbar onCollapseToggle={handleCollapseToggle}/>
        </div>
        <div style={contentStyle}>
          <Stock />
        </div>
      </div>
    </div>
  );
}
