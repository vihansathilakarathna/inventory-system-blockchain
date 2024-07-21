import React,{useState} from "react";

import Dashboard from "../../Components/Dashboard/Dashboard";
import UserNavbar from "../../Components/Navbar/UserNavbar";
import UserDashboard from "../../Components/Dashboard/UserDashboard";

export default function DashboardPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: isCollapsed ? "10px 1fr" : "100px 1fr",
    height: "100vh",
    transition: "grid-template-columns 0.3s ease",
  };

  const contentStyle = {
    marginLeft: isCollapsed ? "10px" : "100px",
    transition: "margin-left 0.3s ease",
  };
  return (
    <div style={containerStyle}>
      <div>
        <UserNavbar onCollapseToggle={handleCollapseToggle} />
      </div>
      <div style={contentStyle}>
        <UserDashboard />
      </div>
    </div>
  );
}
