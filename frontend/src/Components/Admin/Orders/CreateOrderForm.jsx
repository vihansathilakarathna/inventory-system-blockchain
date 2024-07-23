import React, { useState, useEffect } from "react";
import axios from 'axios';
import moment from 'moment';

export default function CreateOrderForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    
    item: "",
    amount: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    onSubmit(formData);

    
  };

  return (
    <form onSubmit={handleSubmit}>
      
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
        <label htmlFor="amount" style={{margin: "5px"}}>Total Amount</label>
        <input
          type="text"
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
