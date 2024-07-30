import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./InventoryAdmin.css";
import AdditemsForm from "./AdditemsForm";

Modal.setAppElement("#root");

export default function AdditemsModal({
  isOpen,
  onClose,
  onSubmit,
  isEditMode,
  editItem,
}) {
  const [formData, setFormData] = useState({
    item: "",
    category: "",
    quantity: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (isEditMode && editItem) {
      setFormData({
        item: editItem.item,
        quantity: editItem.quantity,
        price: editItem.price,
        image: editItem.image,
      });
    } else {
      setFormData({
        item: "",
        category: "", 
        quantity: "",
        price: "",
        image: "",
      });
    }
  }, [isEditMode, editItem]);

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Item Modal"
      className="Modal"
      overlayClassName="Overlay"
      
    >
      <button
        type="button"
        className="close"
        onClick={onClose}
        aria-label="Close"
        style={{ color: "#B43F3F" }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <h4>{isEditMode ? "Edit Item" : "Add New Item"}</h4>

      <AdditemsForm
        onSubmit={handleFormSubmit}
        formData={formData}
        setFormData={setFormData}
        isEditMode={isEditMode}
      />
    </Modal>
  );
}
