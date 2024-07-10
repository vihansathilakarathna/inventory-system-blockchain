import React from "react";
import "./Home.css";
import welcomeImg from "../../Assets/Images/welcomeImg.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="welcome">
      <div className="welcome-note">
        <p className="welcome-title">WELCOME TO STOCK CHAIN</p>
        <p className="welcome-subtitle">Online Inventory Management Software</p>
        <p className="welcome-content">
          Our inventory management system, InvenTrack, is designed to
          revolutionize how you manage your inventory. With cutting-edge
          features and an intuitive interface, InvenTrack ensures you have
          complete control over your stock at all times. Here’s what you can
          expect:
        </p>
        <div className="welcome-btn">
          <Link to="/login">
            <button className="welcome-login">Login</button>
          </Link>
          <Link to="/signup">
            <button className="welcome-signup">Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="welcome-img">
        <img src={welcomeImg} alt="" className="welcome-img-img" />
      </div>
    </div>
  );
}
