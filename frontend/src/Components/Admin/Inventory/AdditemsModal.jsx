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
    quantity: "",
    price: "",
  });

  useEffect(() => {
    if (isEditMode && editItem) {
      setFormData({
        item: editItem.item,
        quantity: editItem.quantity,
        price: editItem.price,
      });
    } else {
      setFormData({
        item: "",
        quantity: "",
        price: "",
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
      <h2>{isEditMode ? "Edit Item" : "Add New Item"}</h2>
      <AdditemsForm
        onSubmit={handleFormSubmit}
        formData={formData}
        setFormData={setFormData}
        isEditMode={isEditMode}
      />
      <button type="button" className="cancel-button" onClick={onClose}>
        Cancel
      </button>
    </Modal>
  );
}
