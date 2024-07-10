import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function About() {
  return (
    <div className="about" id="about">
      <p className="about-title">About Stock Chain</p>
      <p className="about-text">
        Stock Chain is an advanced inventory management system designed to
        streamline your inventory processes and improve operational efficiency.
      </p>
      <div className="mission">
        <p className="mission-title">Mission</p>
        <p className="mission-text">
          "Our mission is to provide businesses with an intuitive and reliable
          solution for managing inventory, ensuring accurate stock levels and
          smooth operations."
        </p>
      </div>
      <p className="about-content">
        Ready to take control of your inventory? Sign up today !!
      </p>
      <div className="about-btn">
        <Link to="/signup">
          <button className="welcome-signup">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
