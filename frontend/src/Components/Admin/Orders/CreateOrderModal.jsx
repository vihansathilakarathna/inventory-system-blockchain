import React from "react";
import Modal from "react-modal";
import CreateOrderForm from "./CreateOrderForm";

Modal.setAppElement("#root");

export default function CreateOrderModal({ isOpen, onClose, onSubmit }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Create Order Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Create New Order</h2>
      <CreateOrderForm onSubmit={onSubmit} />
      <button type="button" className="cancel-button" onClick={onClose}>
        Cancel
      </button>
    </Modal>
  );
}
