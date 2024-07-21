import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import AddClientForm from "./AddClientForm";

Modal.setAppElement("#root");

export default function AddClientModal({isOpen,
    onClose,
    onSubmit}) {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
          });
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
      <h2>AddClient</h2>
      <AddClientForm
        onSubmit={handleFormSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </Modal>

  )
}
