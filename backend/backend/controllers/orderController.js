const OrderModel = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
      const newOrder = new OrderModel({
        ...req.body,
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