import React from "react";
import UserNavbar from "../../Components/Navbar/UserNavbar";
import Notification from "../../Components/User/Notification/Notification";

export default function NotificationPage() {
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
        <Notification />
      </div>
    </div>
  );
}
