import React, { useState, useEffect } from "react";
import CreateOrderModal from "./CreateOrderModal";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

export default function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3001/api/order/getOrders') 
      .then(response => setOrders(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateOrder = (newOrder) => {
    axios.post("http://localhost:3001/api/order/createOrder", newOrder)
      .then(result => {
        setOrders([...orders, result.data]); 
      })
      .catch(err => console.log(err));

    handleCloseModal();
  };


  const handleDeleteOrder = (orderID, index) => {
    axios.delete(`http://localhost:3001/api/order/deleteOrder/${orderID}`)
      .then(() => {
        const updatedOrders = orders.filter((_, i) => i !== index);
        setOrders(updatedOrders);
      })
      .catch(err => console.log(err));
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
        <table style={{width: "95%", marginBottom: "5%"}}>
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
                <td>{new Date(item.date).toLocaleString()}</td>
                <td>{item.amount}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleDeleteOrder(item.orderID, index)}
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
