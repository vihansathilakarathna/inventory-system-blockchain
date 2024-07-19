import React, { useState } from "react";
import axios from 'axios';

export default function CreateOrderForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    orderID: "",
    item: "",
    date: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    axios.post("http://localhost:3001/createOrder", formData)
    .then(result => console.log(result))
    .catch(err => console.log(err))
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="orderID" style={{margin: "5px"}}>Order ID</label>
        <input
          type="number"
          id="orderID"
          name="orderID"
          value={formData.orderID}
          onChange={handleInputChange}
          required
          className="modal-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="item" style={{margin: "5px"}}>Item</label>
        <input
          type="text"
          id="item"
          name="item"
          value={formData.item}
          onChange={handleInputChange}
          required
          className="modal-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="date" style={{margin: "5px"}}>Date</label>
        <input
          type= "date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
          className="modal-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount" style={{margin: "5px"}}>Total Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          required
          className="modal-input"
        />
      </div>
      <div className="additem-btn">
        <button type="submit" className="add-btn">
          Create Order
        </button>
      </div>
    </form>
  );
}
