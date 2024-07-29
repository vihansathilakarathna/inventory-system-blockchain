const OrderModel = require('../models/Order');

exports.getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const uniqueOrderID = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const newOrder = new OrderModel({
      ...req.body,
      orderID: uniqueOrderID, 
      date: new Date()
    });
    const savedOrder = await newOrder.save();
    res.json(savedOrder); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { orderID } = req.params;
    const deletedOrder = await OrderModel.findOneAndDelete({ orderID });
    if (deletedOrder) {
      res.json({ message: 'Order deleted successfully' });
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};