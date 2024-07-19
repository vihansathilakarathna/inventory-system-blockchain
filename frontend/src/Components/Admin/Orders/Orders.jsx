import React, { useState, useEffect } from "react";
import CreateOrderModal from "./CreateOrderModal";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });


  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
    handleCloseModal();
  };

  const handleDeleteOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
  };

  return (
    <div>
      <p className="ai-title">Order Management</p>
      <div className="ai-button-div">
        <button className="ai-button" onClick={handleOpenModal}>
          Create Order
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Item</th>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr key={index}>
                <td>{item.orderID}</td>
                <td>{item.item}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleDeleteOrder(index)}
                    className="ai-icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreateOrderModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleCreateOrder}
      />
    </div>
  );
}
