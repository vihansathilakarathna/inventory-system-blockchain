import React, { useState, useEffect } from "react";
import "./InventoryAdmin.css";
import AdditemsModal from "./AdditemsModal";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Inventory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editItemIndex, setEditItemIndex] = useState(null);
  const [totalItemsData, setTotalItemsData] = useState(() => {
    const savedItems = localStorage.getItem("totalItemsData");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const {id} = useParams();

  useEffect(() => {
    localStorage.setItem("totalItemsData", JSON.stringify(totalItemsData));
  }, [totalItemsData]);

  useEffect (() => {
    axios.get('http://localhost:3001/getItem/' +id)
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }, [])

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
        index === editItemIndex ? { ...newItem, _id: item._id, action: "delete" } : item
      );
      setTotalItemsData(updatedItems);
    } else {
      setTotalItemsData([...totalItemsData, { ...newItem, action: "delete" }]);
    }
    handleCloseModal();
    axios.post("http://localhost:3001/createItem", { item: newItem.item, quantity: newItem.quantity, price: newItem.price })
    .then(result => console.log(result))
    .catch(err => console.log(err))
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
    axios.put("http://localhost:3001/updateItem/"+id, {
      item: itemToEdit.item,
      quantity: itemToEdit.quantity,
      price: itemToEdit.price
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))
  };

  return (
    <div>
      <p className="ai-title">Inventory Management</p>
      <div className="ai-button-div">
        <button className="ai-button" onClick={handleOpenModal}>
          Add Item +
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {totalItemsData.map((item, index) => (
              <tr key={index}>
                <td>{item.item}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
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
