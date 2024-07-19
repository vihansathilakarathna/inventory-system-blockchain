const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderID: Number,
    item:String,
    date: Date,
    amount: Number,
    user: { type: Schema.Types.ObjectId, ref: 'users' }
})

const OrderModel = mongoose.model("orders", OrderSchema)
module.exports = OrderModel