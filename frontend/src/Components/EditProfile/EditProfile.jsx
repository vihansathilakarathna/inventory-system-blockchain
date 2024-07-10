import React from "react";
import "./EditProfile.css";
import profileImg from "../../Assets/Images/profileImage.jpg";

export default function EditProfile() {
  return (
    <div className="editProfile">
      <p className="profile-title">Edit Profile Details</p>
      <div>
        <img src={profileImg} alt="" className="profile-img" />
        <p className="profile-img-text">Edit Profile Image</p>
      </div>
      <div className="profile-content">
        <form>
          <div class="profile-form">
            <label htmlFor="exampleInputName" className="profile-label">
              Name:
            </label>
            <input type="text" className="Profile-control" id="name" />
          </div>
          <div class="profile-form">
            <label htmlFor="exampleInputUsername" className="profile-label">
              Username:
            </label>
            <input type="text" className="Profile-control" id="username" />
          </div>
          <div class="profile-form">
            <label for="exampleInputEmail1" class="profile-label">
              Email address:
            </label>
            <input type="email" className="Profile-control" id="email" />
          </div>
          <div class="profile-form">
            <label for="exampleInputPassword1" class="profile-label">
              Password:
            </label>
            <input type="password" className="Profile-control" id="password" />
          </div>
          <button type="submit" class="login-button">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
