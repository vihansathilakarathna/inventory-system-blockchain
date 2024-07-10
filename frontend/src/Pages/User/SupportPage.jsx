import React from "react";
import UserNavbar from "../../Components/Navbar/UserNavbar";
import Support from "../../Components/User/Support/Support";

export default function SupportPage() {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "250px 1fr",
    height: "100vh",
  };

  const contentStyle = {
    padding: "100px 20px 20px 0",
  };
  return (
    <div style={containerStyle}>
      <div>
        <UserNavbar />
      </div>
      <div style={contentStyle}>
        <Support />
      </div>
    </div>
  );
}
