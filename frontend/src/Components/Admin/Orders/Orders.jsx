import React, { useState, useEffect } from "react";
import CreateOrderModal from "./CreateOrderModal";

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
              <th>Supplier</th>
              <th>Item</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr key={index}>
                <td>{item.orderID}</td>
                <td>{item.supplier}</td>
                <td>{item.item}</td>
                <td>{item.status}</td>
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
