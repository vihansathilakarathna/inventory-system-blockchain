import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function UserDashboard() {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAllItems, setShowAllItems] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
    console.log("Loaded cart items from localStorage:", savedCartItems);
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log("Saved cart items to localStorage:", cartItems);
    }
  }, [cartItems]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/items/getAllItems")
      .then((response) => {
        setItems(response.data);
        console.log("Loaded items from backend:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const handlePlaceOrder = (card) => {
    const itemWithQuantity = { ...card, quantity: 1 };
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, itemWithQuantity];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      console.log("Item added to cart:", itemWithQuantity);
      console.log("Updated cart items:", updatedItems);
      return updatedItems;
    });
  };

  const handleCartClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      console.log("Item removed from cart at index:", index);
      console.log("Updated cart items after removal:", updatedItems);
      return updatedItems;
    });
  };

  const handleViewCart = () => {
    navigate("/user/orders", { state: { cartItems } });
    handleCloseModal();
  };

  const handleShowAllItems = () => {
    setShowAllItems(true);
  };

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setShowAllItems(false);
  };

  const filteredItems =
    currentCategory === "all"
      ? items
      : items.filter((item) => item.category === currentCategory);

  return (
    <div className="container mt-4">
      <div className="topbar-item">
        <p
          onClick={() => handleCategoryClick("all")}
          className="dashboard-link"
        >
          All
        </p>

        <p
          onClick={() => handleCategoryClick("top")}
          className="dashboard-link"
        >
          Tops
        </p>

        <p
          onClick={() => handleCategoryClick("bottoms")}
          className="dashboard-link"
        >
          Bottoms
        </p>

        <p
          onClick={() => handleCategoryClick("dresses")}
          className="dashboard-link"
        >
          Dresses
        </p>

        <p
          onClick={() => handleCategoryClick("outerwear")}
          className="dashboard-link"
        >
          Outerwear
        </p>

        <p
          onClick={() => handleCategoryClick("footwear")}
          className="dashboard-link"
        >
          Footwear
        </p>

        <p
          onClick={() => handleCategoryClick("accessories")}
          className="dashboard-link"
        >
          Accessories
        </p>

        <p
          onClick={() => handleCategoryClick("bags")}
          className="dashboard-link"
        >
          Bags
        </p>

        <p
          onClick={() => handleCategoryClick("activewear")}
          className="dashboard-link"
        >
          Activewear
        </p>

        <p
          onClick={() => handleCategoryClick("swimwear")}
          className="dashboard-link"
        >
          Swimwear
        </p>
      </div>
      <div className="shopping-cart" onClick={handleCartClick}>
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </div>
      <div className="row" style={{ marginTop: "20px" }}>
      {filteredItems.slice(0, showAllItems ? filteredItems.length : 6).map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-head">{item.item}</h5>

                <img src={item.image} alt="" className="card-img" />

                <p className="price-tag">{item.price}</p>
              </div>
              <div className="cart-order-div">
                <button
                  className="card-order-btn"
                  onClick={() => handlePlaceOrder(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAllItems && (
        <div className="view-all-btn">
          <button onClick={handleShowAllItems}>View All</button>
        </div>
      )}
      {showModal && (
        <div
          className="modal show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Shopping Cart</h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  {cartItems.map((item, index) => (
                    <li
                      key={index}
                      className="list-group-item  d-flex align-items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="modal-img-card mr-3"
                      />
                      <p
                        className="mb-0"
                        style={{
                          marginRight: "10px",
                          fontSize: "20px",
                          color: "#03242f",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: "20px", color: "#03242f" }}
                      >
                        {item.price}
                      </p>
                      <button
                        className="modal-card-btn"
                        onClick={() => handleRemoveFromCart(index)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button className="view-cart" onClick={handleViewCart}>
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
