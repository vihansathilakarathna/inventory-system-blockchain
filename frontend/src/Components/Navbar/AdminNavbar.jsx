import React, { useState } from "react";
import "./Navbar.css";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBox,
  faChartBar,
  faChartLine,
  faCubes,
  faFileInvoice,
  faHome,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Images/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function AdminNavbar({ onCollapseToggle }) {
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
              <Dropdown.Item as={Link} to="/admin/editprofile">
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
                to="/admin/home"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faHome} className="icons-sidebar" />
                {!isCollapsed && "Home"}
              </NavLink>
              <NavLink
                to="/admin/inventory"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faBox} className="icons-sidebar" />
                {!isCollapsed && "Inventory"}
              </NavLink>
              <NavLink
                to="/admin/clients"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faUser} className="icons-sidebar" />
                {!isCollapsed && "Clients"}
              </NavLink>

              <NavLink
                to="/admin/sales"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faChartLine} className="icons-sidebar" />
                {!isCollapsed && "Sales"}
              </NavLink>
              <NavLink
                to="/admin/stock"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faCubes} className="icons-sidebar" />
                {!isCollapsed && "Stock"}
              </NavLink>
              <NavLink
                to="/admin/orders"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon
                  icon={faFileInvoice}
                  className="icons-sidebar"
                />
                {!isCollapsed && "Orders"}
              </NavLink>
              <NavLink
                to="/admin/reports"
                className="sidenav-link"
                activeClassName="active"
              >
                <FontAwesomeIcon icon={faChartBar} className="icons-sidebar" />
                {!isCollapsed && "Summary"}
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
