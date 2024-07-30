import React, { useState, useEffect } from "react";
import "./InventoryAdmin.css";

const categories = ["top", "dress", "swimwear", "bottoms", "outerwear", "footwear", "accessories", "bags", "activewear"];
const itemsByCategory = {
  top: ["T-shirt", "Blouse", "Tank Top"],
  dress: ["Long Dress", "Short Dress", "Daisy Dress"],
  swimwear: ["One-piece", "Bikini", "Trunks"],
  bottoms: ["Jeans", "Trousers", "Cargo pants"],
  outerwear: ["Bomber jackets", "Trench coats", "Blazer"],
  footwear: ["Sneakers", "Sandal", "Heel"],
  accessories: ["Earring", "Necklaces", "Bracelets"],
  bags: ["Tote Bags", "Shoulder Bags", "Backpacks"],
  activewear: ["Hoodie", "Leggings", "Sleeveless shirt" ]
};


export default function AdditemsForm({
  onSubmit,
  formData,
  setFormData,
  isEditMode,
}) {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    
    if (formData.category && itemsByCategory[formData.category]) {
      setFilteredItems(itemsByCategory[formData.category]);
    } else {
      setFilteredItems([]);
    }
  }, [formData.category]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ item: "", category: "", quantity: "", price: "", image: "" });
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="category" style={{ margin: "5px" }}>Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
          className="modal-input"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="item" style={{ margin: "5px" }}>Item</label>
        <select
          id="item"
          name="item"
          value={formData.item}
          onChange={handleInputChange}
          required
          className="modal-input"
          disabled={!formData.category}
        >
          <option value="">Select Item</option>
          {filteredItems.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="quantity" style={{margin: "5px"}}>Quantity</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          required
          className="modal-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price" style={{margin: "5px"}}>Price</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
          className="modal-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="image" style={{ margin: "5px" }}>Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="modal-input"
        />
        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            style={{ width: "100px", height: "100px", marginTop: "10px" }}
          />
        )}
        </div>
      <div className="additem-btn">
        <button type="submit" className="add-btn">
          {isEditMode ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}
