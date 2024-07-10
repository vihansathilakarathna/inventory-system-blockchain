import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faChartLine,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  return (
    <div className="features" id="features">
      <div className="container mt-5">
        <h2 className="features-text">Features</h2>
        <div
          id="featuresCarousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#featuresCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#featuresCarousel" data-slide-to="1"></li>
            <li data-target="#featuresCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{ height: "300px" }}
              >
                <FontAwesomeIcon icon={faClock} size="3x" />
                <h5 className="mt-3">Real-Time Tracking</h5>
                <p className="mt-2">
                  Stay updated with the latest inventory levels and movements to
                  make informed decisions and prevent stockouts or overstocking.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{ height: "300px" }}
              >
                <FontAwesomeIcon icon={faChartLine} size="3x" />
                <h5 className="mt-3">Analytics & Reporting</h5>
                <p className="mt-2">
                  Gain insights into your inventory performance with detailed
                  analytics and customizable reports.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="d-flex justify-content-center align-items-center flex-column"
                style={{ height: "300px" }}
              >
                <FontAwesomeIcon icon={faBoxOpen} size="3x" />
                <h5 className="mt-3">Automated Reordering</h5>
                <p className="mt-2">
                  Automatically reorder stock when levels are low, ensuring you
                  never run out of essential items.
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#featuresCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#featuresCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
