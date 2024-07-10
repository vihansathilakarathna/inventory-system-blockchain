import React, { useState } from "react";

export default function CreateOrderForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    orderID: "",
    supplier: "",
    item: "",
    status: "Pending",
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
        <label htmlFor="supplier" style={{margin: "5px"}}>Supplier</label>
        <input
          type="text"
          id="supplier"
          name="supplier"
          value={formData.supplier}
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
        <label htmlFor="status" style={{margin: "5px"}}>Status</label>
        <input
          type="text"
          id="status"
          name="status"
          value={formData.status}
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
