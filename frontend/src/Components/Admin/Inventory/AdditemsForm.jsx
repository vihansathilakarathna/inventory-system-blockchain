import React from "react";
import "./InventoryAdmin.css";

export default function AdditemsForm({
  onSubmit,
  formData,
  setFormData,
  isEditMode,
}) {
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
        <label htmlFor="quantity" style={{margin: "5px"}}>Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          required
          className="modal-input"
        />
      </div>
      <div className="additem-btn">
        <button type="submit" className="add-btn">
          {isEditMode ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}
