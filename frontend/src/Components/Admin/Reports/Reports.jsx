import React from "react";
import "./Reports.css";
import { Link } from "react-router-dom";

export default function Reports() {
  return (
    <div>
      <p className="ai-title">Reports Management</p>
      <div className="reports">
        <p className="rep-tilte">Inventory Reports</p>
        <Link to="/admin/inventory">
          <button className="report-btn">View Reports</button>
        </Link>
      </div>
      <div className="reports">
        <p className="rep-tilte">Sales Reports</p>
        <Link to="/admin/sales">
          <button className="report-btn">View Reports</button>
        </Link>
      </div>
      <div className="reports">
        <p className="rep-tilte">Order Reports</p>
        <Link to="/admin/orders">
          <button className="report-btn">View Reports</button>
        </Link>
      </div>
    </div>
  );
}
