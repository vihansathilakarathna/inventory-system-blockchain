import React, { useState } from "react";
import "./Notification.css";

export default function Notification() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Order #1234 has been shipped",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      message: "New message from supplier",
      time: "1 day ago",
      read: true,
    },
    { id: 3, message: "Stock levels updated", time: "3 days ago", read: false },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="notification-page">
      <ul className="notification-list">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-item ${notification.read ? "read" : ""}`}
            onClick={() => markAsRead(notification.id)}
          >
            <p>{notification.message}</p>
            <span className="notification-time">{notification.time}</span>
          </div>
        ))}
      </ul>
    </div>
  );
}
