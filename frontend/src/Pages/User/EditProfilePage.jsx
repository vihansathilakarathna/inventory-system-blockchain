import React from "react";
import UserNavbar from "../../Components/Navbar/UserNavbar";
import EditProfile from "../../Components/EditProfile/EditProfile";

export default function EditProfilePage() {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "250px 1fr",
    height: "100vh",
  };

  const contentStyle = {
    padding: "100px 200px",
  };
  return (
    <div style={containerStyle}>
      <div>
        <UserNavbar />
      </div>
      <div style={contentStyle}>
        <EditProfile />
      </div>
    </div>
  );
}
