const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    item:String,
    category: String,
    quantity: Number,
    price: Number,
    image: String,
})

const ItemModal = mongoose.model("items", ItemSchema)
module.exports = ItemModal