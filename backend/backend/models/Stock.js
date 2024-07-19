const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({orderID: Number,
    item:String,
    quantity: Number
})

const StockModel = mongoose.model("stock", StockSchema)
module.exports = StockModel