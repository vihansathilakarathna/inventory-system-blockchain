const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema({
  orderID: Number,
  item: String,
  quantitySold: Number,
  date: Date,
  total: Number
});

const SalesModel = mongoose.model("sales", SalesSchema);
module.exports = SalesModel;
