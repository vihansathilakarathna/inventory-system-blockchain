import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="/signup">SignUp</a>
          </li>
        </ul>
        <p>© 2024 StockChain. All rights reserved.</p>
      </div>
    </footer>
  );
}
