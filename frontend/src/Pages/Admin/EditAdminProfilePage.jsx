import React from "react";
import AdminNavbar from "../../Components/Navbar/AdminNavbar";
import EditProfile from "../../Components/EditProfile/EditProfile";

export default function EditAdminProfilePage() {
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
        <AdminNavbar />
      </div>
      <div style={contentStyle}>
        <EditProfile />
      </div>
    </div>
  );
}
