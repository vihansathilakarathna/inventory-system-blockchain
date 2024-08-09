// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OrderContract {
    struct Order {
        uint id;
        string item;
        uint quantity;
        uint price;
        address customer;
        bool fulfilled;
    }

    uint public nextOrderId;
    mapping(uint => Order) public orders;

    event OrderPlaced(uint id, string item, uint quantity, uint price, address customer);
    event OrderFulfilled(uint id);

    function placeOrder(string memory item, uint quantity, uint price) public {
        orders[nextOrderId] = Order(nextOrderId, item, quantity, price, msg.sender, false);
        emit OrderPlaced(nextOrderId, item, quantity, price, msg.sender);
        nextOrderId++;
    }

    function fulfillOrder(uint orderId) public {
        require(orderId < nextOrderId, "Order does not exist.");
        Order storage order = orders[orderId];
        require(order.customer == msg.sender, "Only the customer can fulfill the order.");
        require(!order.fulfilled, "Order is already fulfilled.");
        order.fulfilled = true;
        emit OrderFulfilled(orderId);
    }

    function getOrder(uint orderId) public view returns (uint, string memory, uint, uint, address, bool) {
        require(orderId < nextOrderId, "Order does not exist.");
        Order storage order = orders[orderId];
        return (order.id, order.item, order.quantity, order.price, order.customer, order.fulfilled);
    }
}
