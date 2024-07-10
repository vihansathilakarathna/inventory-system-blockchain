import React from "react";
import logo from "../../Assets/Images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" className="navbar-logo-img" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#features">
                Features
              </a>
            </li>
          </ul>
          <div className="navbar-btn">
            <a href="login">
              <button className="navbar-btn-btn">Login</button>
            </a>
            <a href="signup">
              <button className="navbar-btn-btn">Signup</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
