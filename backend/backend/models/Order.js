const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderID: String,
    item: String,
    date: { type: Date, default: Date.now },
    amount: Number,
})

const OrderModel = mongoose.model("orders", OrderSchema)
module.exports = OrderModel