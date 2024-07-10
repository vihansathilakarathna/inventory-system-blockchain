import React, { useState } from "react";
import "./Navbar.css";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faBox,
  faCog,
  faHome,
  faLifeRing,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Images/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function UserNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <nav className="topnavbar fixed-top d-flex justify-content-between align-items-center p-3 text-black">
        <div className="d-flex ">
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            className="topnav-menu"
            onClick={toggleSidebar}
          />
          <img src={logo} alt="" className="navbar-logo-img" />
          <span className="topnavbar-title">STOCK CHAIN</span>
        </div>
        <div>
        <Dropdown align="end">
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <FontAwesomeIcon icon={faUserCircle} size="2x" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/editprofile">
                Edit Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>

      <div className="d-flex pt-5">
        <div className={`sidebar-user ${isCollapsed ? "collapsed" : ""}`}>
          <div>
            <nav className="nav flex-column p-3">
              <NavLink
                to="/dashboard"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faHome} className="icons-sidebar" />
                {!isCollapsed && "Home"}
              </NavLink>
              <NavLink
                to="/user/inventory"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faBox} className="icons-sidebar" />
                {!isCollapsed && "Inventory"}
              </NavLink>

              <NavLink
                to="/user/notification"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faBell} className="icons-sidebar" />
                {!isCollapsed && "Notification"}
              </NavLink>
              <NavLink
                to="/user/support"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faCog} className="icons-sidebar" />
                {!isCollapsed && "Support"}
              </NavLink>
            </nav>
          </div>
          {!isCollapsed && <hr className="hr" />}
          {!isCollapsed && (
            <p className="sidebar-copyright">
              © 2024 StockChain. All rights reserved.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
