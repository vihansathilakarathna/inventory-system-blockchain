import React,{useState} from "react";
import UserNavbar from "../../Components/Navbar/UserNavbar";
import Support from "../../Components/User/Support/Support";

export default function SupportPage() {
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
        <UserNavbar onCollapseToggle={handleCollapseToggle}/>
      </div>
      <div style={contentStyle}>
        <Support />
      </div>
    </div>
  );
}
