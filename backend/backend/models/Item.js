const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    item:String,
    quantity: Number,
    price: Number
})

const ItemModal = mongoose.model("items", ItemSchema)
module.exports = ItemModal