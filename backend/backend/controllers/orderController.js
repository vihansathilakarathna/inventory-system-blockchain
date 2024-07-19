const OrderModel = require('../models/Order');
const UserModel = require('../models/User');

exports.createOrder = (req, res) => {
    UserModel.findById(req.body.userId)
        .then(user => {
            if (!user) return res.status(404).json({ message: 'User not found' });

            const newOrder = new OrderModel({
                orderID: req.body.orderID,
                item: req.body.item,
                date: req.body.date,
                amount: req.body.amount,
                user: user._id 
            });

            return newOrder.save();
        })
        .then(order => res.status(201).json(order))
        .catch(err => res.status(400).json(err));
};

exports.getOrders = (req, res) => {
    OrderModel.find()
        .populate('user') 
        .then(orders => res.status(200).json(orders))
        .catch(err => res.status(400).json(err));
};