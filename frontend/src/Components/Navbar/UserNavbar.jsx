import React, { useState } from "react";
import "./Navbar.css";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHistory,
  faHome,
  faInfoCircle,
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Images/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function UserNavbar({onCollapseToggle}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (onCollapseToggle) onCollapseToggle();
  };

  return (
    <>
      <nav className="topnavbar fixed-top d-flex justify-content-between align-items-center p-3 text-black">
        <div className="d-flex ">
          
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

      <div className={`d-flex pt-5 ${isCollapsed ? "collapsed" : ""}`}>
      
      <div className={`sidebar-user ${isCollapsed ? "collapsed" : ""}`}>
      <div className="navbar-menu-icon">
        <FontAwesomeIcon
            icon={faBars}
            size="x1"
            className="topnav-menu"
            onClick={toggleSidebar}
          />
          </div>
          <div>
            <nav className="nav flex-column p-3">
              <NavLink
                to="/user/dashboard"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faHome} className="icons-sidebar" />
                {!isCollapsed && "Home"}
              </NavLink>
              <NavLink
                to="/user/orders"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="icons-sidebar" />
                {!isCollapsed && "Orders"}
              </NavLink>

              <NavLink
                to="/user/history"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faHistory} className="icons-sidebar" />
                {!isCollapsed && "History"}
              </NavLink>
              <NavLink
                to="/user/help"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faInfoCircle} className="icons-sidebar" />
                {!isCollapsed && "Help"}
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
