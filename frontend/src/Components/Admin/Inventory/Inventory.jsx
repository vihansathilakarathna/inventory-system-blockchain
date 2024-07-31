import React, { useState, useEffect } from "react";
import "./InventoryAdmin.css";
import AdditemsModal from "./AdditemsModal";
import { faChevronDown, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const categories = ["top", "dress", "kids", "bottoms", "outerwear", "footwear", "accessories", "bags", "activewear"];

const itemsByCategory = {
  top: ["T-shirt", "Blouse", "Tank Top"],
  dress: ["Long Dress", "Short Dress", "Daisy Dress"],
  kids: ["Boy", "Girl", "Baby"],
  bottoms: ["Jeans", "Trousers", "Cargo pants"],
  outerwear: ["Bomber jackets", "Trench coats", "Blazer"],
  footwear: ["Sneakers", "Sandal", "Heel"],
  accessories: ["Earring", "Necklaces", "Bracelets"],
  bags: ["Tote Bags", "Shoulder Bags", "Backpacks"],
  activewear: ["Hoodie", "Leggings", "Sleeveless shirt" ]
};

export default function Inventory({ showButtons = true }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editItemIndex, setEditItemIndex] = useState(null);
  const [totalItemsData, setTotalItemsData] = useState(() => {
    const savedItems = localStorage.getItem("totalItemsData");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [categoryFilter, setCategoryFilter] = useState("all");
  const [itemFilter, setItemFilter] = useState("all");

  const { id } = useParams();

  useEffect(() => {
    localStorage.setItem("totalItemsData", JSON.stringify(totalItemsData));
  }, [totalItemsData]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/items/getItem/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsEditMode(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setEditItemIndex(null);
  };

  const handleAddItem = (newItem) => {
    if (isEditMode && editItemIndex !== null) {
      const updatedItems = totalItemsData.map((item, index) =>
        index === editItemIndex
          ? { ...newItem, _id: item._id, action: "delete" }
          : item
      );
      setTotalItemsData(updatedItems);
    } else {
      setTotalItemsData([...totalItemsData, { ...newItem, action: "delete" }]);
    }
    handleCloseModal();
    axios
      .post("http://localhost:3001/api/items/createItem", {
        item: newItem.item,
        category: newItem.category,
        quantity: newItem.quantity,
        price: newItem.price,
        image: newItem.image,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleDeleteItem = (index) => {
    const updatedItems = totalItemsData.filter((_, i) => i !== index);
    setTotalItemsData(updatedItems);
  };

  const handleEditItem = (index) => {
    const itemToEdit = totalItemsData[index];
    setEditItemIndex(index);
    setIsEditMode(true);
    setIsModalOpen(true);
    axios
      .put("http://localhost:3001/api/items/updateItem/" + id, {
        item: itemToEdit.item,
        quantity: itemToEdit.quantity,
        price: itemToEdit.price,
        image: itemToEdit.image,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    setItemFilter("all");
  };

  const handleItemChange = (e) => {
    setItemFilter(e.target.value);
  };

  const filteredItems = totalItemsData.filter((item) => {
    return (
      (categoryFilter === "all" || item.category === categoryFilter) &&
      (itemFilter === "all" || item.item === itemFilter)
    );
  });

  return (
    <div>
      {showButtons && (
        <div>
          <p className="ai-title">Inventory Management</p>

          <div className="ai-button-div">
            <button className="ai-button" onClick={handleOpenModal}>
              Add Item
            </button>
            <Link to="/admin/orders">
              <button className="item-orderbtn">Place Order</button>
            </Link>
          </div>
        </div>
      )}

<div className="row mb-3" style={{ marginRight: "4%" }}>
        <div className="col-md-6">
          <div className="form-group position-relative">
            <label htmlFor="categoryFilter">Category</label>
            <select
              className="form-control"
              id="categoryFilter"
              value={categoryFilter}
              onChange={handleCategoryChange}
            >
              <option value="all">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="position-absolute end-0 top-50 translate-middle-y me-2 mt-3 fa-sm"
              
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group position-relative">
            <label htmlFor="itemFilter">Item</label>
            <select
              className="form-control"
              id="itemFilter"
              value={itemFilter}
              onChange={handleItemChange}
            >
              <option value="all">All</option>
              {categoryFilter !== "all" &&
                itemsByCategory[categoryFilter].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </select>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="position-absolute end-0 top-50 translate-middle-y me-2 mt-3 fa-sm"
              
            />
          </div>
        </div>
      </div>
      <div>
        <table style={{ width: "95%" }} id="inventory-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.item}
                      style={{ width: "50px", height: "50px" }}
                    />
                  )}
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faPen}
                    onClick={() => handleEditItem(index)}
                    className="ai-icon"
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleDeleteItem(index)}
                    className="ai-icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AdditemsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddItem}
        isEditMode={isEditMode}
        editItem={
          isEditMode && editItemIndex !== null
            ? totalItemsData[editItemIndex]
            : null
        }
      />
    </div>
  );
}
