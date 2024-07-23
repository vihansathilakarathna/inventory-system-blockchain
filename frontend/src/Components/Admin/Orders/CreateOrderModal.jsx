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
      <button
        type="button"
        className="close"
        onClick={onClose}
        aria-label="Close"
        style={{ color: "#B43F3F" }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <h2>Create New Order</h2>
      <CreateOrderForm onSubmit={onSubmit} />
      
    </Modal>
  );
}
