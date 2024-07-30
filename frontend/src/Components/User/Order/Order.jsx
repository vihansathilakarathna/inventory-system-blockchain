import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Order.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Order() {
  const navigate = useNavigate();
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
  };

  const handleIncrement = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleDecrement = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const handleQuantityChange = (index, event) => {
    const updatedCartItems = [...cartItems];
    const newQuantity = parseInt(event.target.value, 10);

    if (!isNaN(newQuantity) && newQuantity > 0) {
      updatedCartItems[index].quantity = newQuantity;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const handleRemove = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handlePlaceOrder = () => {
    const order = {
      item: cartItems.map(item => `${item.item} (${item.quantity})`).join(', '),
      amount: calculateTotal()
    };

    axios.post("http://localhost:3001/api/order/createOrder", order)
      .then(result => {
        alert('Order placed successfully');
        localStorage.removeItem("cartItems");
        setCartItems([]);
        navigate('/user/history');
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{ margin: "100px 50px 100px 0" }}>
      {cartItems.length > 0 ? (
        <>
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex align-items-center">
                <img src={item.image} alt={item.title} className="order-img-card mr-3" />
                <div>
                  <p className="mb-0" style={{ marginRight: "10px", fontSize: "20px", color: "#03242f" }}>
                    {item.title}
                  </p>
                  <p className="mb-0" style={{ fontSize: "20px", color: "#03242f" }}>
                    {item.price}
                  </p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(index)}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, e)}
                    className="quantity-input"
                  />
                  <button onClick={() => handleIncrement(index)}>+</button>
                </div>
                <div>
                  <FontAwesomeIcon icon={faMinusCircle} className="remove-btn-order" onClick={() => handleRemove(index)} />
                </div> 
              </li>
            ))}
          </ul>
          <h3 style={{ margin: "10px 0" }}>Total: ${calculateTotal()}</h3>
          <button className="placeOrder-btn" onClick={handlePlaceOrder}>Place Order</button>
        </>
      ) : (
        <p>No orders</p>
      )}
    </div>
  );
}
