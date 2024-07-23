import React, { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import img1 from "../../../Assets/Catagory/Tops/top1.jpg";
import img2 from "../../../Assets/Catagory/Dress/dress1.jpeg";
import img3 from "../../../Assets/Catagory/Dress/dress2.jpg";
import img4 from "../../../Assets/Catagory/Bottom/bottom1.jpeg";
import img5 from "../../../Assets/Catagory/Footwear/footwear1.jpg";
import img6 from "../../../Assets/Catagory/Accessories/accessories1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const cardItem = [
  {
    title: "Classy Top",
    link: "/category/all",
    image: img1,
  },
  {
    title: "Floral Dress",
    link: "/category/tops",
    image: img2,
  },
  {
    title: "Mini Dress",
    link: "/category/tops",
    image: img3,
  },
  {
    title: "Office Jean",
    link: "/category/tops",
    image: img4,
  },
  {
    title: "Heels",
    link: "/category/tops",
    image: img5,
  },
  {
    title: "Earrings",
    link: "/category/tops",
    image: img6,
  },
];

export default function UserDashboard() {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);


  const handlePlaceOrder = (card) => {
    setCartItems([...cartItems, card]);
  };

  const handleCartClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <div className="topbar-item">
        <Link to="/category/all" className="dashboard-link">
          <p>All</p>
        </Link>
        <Link to="/category/tops" className="dashboard-link">
          <p>Tops</p>
        </Link>
        <Link to="/category/bottoms" className="dashboard-link">
          <p>Bottoms</p>
        </Link>
        <Link to="/category/dresses" className="dashboard-link">
          <p>Dresses</p>
        </Link>
        <Link to="/category/outerwear" className="dashboard-link">
          <p>Outerwear</p>
        </Link>
        <Link to="/category/footwear" className="dashboard-link">
          <p>Footwear</p>
        </Link>
        <Link to="/category/accessories" className="dashboard-link">
          <p>Accessories</p>
        </Link>
        <Link to="/category/bags" className="dashboard-link">
          <p>Bags</p>
        </Link>
        <Link to="/category/activewear" className="dashboard-link">
          <p>Activewear</p>
        </Link>
        <Link to="/category/swimwear" className="dashboard-link">
          <p>Swimwear</p>
        </Link>
      </div>
      <div className="shopping-cart" onClick={handleCartClick}>
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        {cartItems.length > 0 && <span className='cart-count'>{cartItems.length}</span>}
      </div>
      <div className="row" style={{ marginTop: "20px" }}>
        {cardItem.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-head">{card.title}</h5>
                <a href={card.link}>
                  <img src={card.image} alt="" className="card-img" />
                </a>
              </div>
              <div className="cart-order-div">
                <button
                  className="card-order-btn"
                  onClick={() => handlePlaceOrder(card)}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-btn">
        <button>View All</button>
      </div>
      {showModal && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Shopping Cart</h5>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  {cartItems.map((item, index) => (
                    <li key={index} className="list-group-item d-flex align-items-center">
                      <img src={item.image} alt={item.title} className='modal-img mr-3'/>
                      <p className='mb-0'>{item.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
