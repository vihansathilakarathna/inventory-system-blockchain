const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//const ItemModal = require("./backend/models/Item");
//const OrderModel = require("./backend/models/Order");
const StockModel = require("./backend/models/Stock");
const SalesModel = require("./backend/models/Sales");

const userRoutes = require('./backend/routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(cookieParser());

app.use('/api/users', userRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/inventory')
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error(err.message);
        process.exit(1);
    });

  /* Stock */


  /* Order 
  app.post("/createOrder", (req, res) => {
    OrderModel.create(req.body)
      .then((orders) => res.json(orders))
      .catch((err) => res.json(err));
  });
*/
  /* Item 
app.get("/getItem/:id", (req, res) => {
  const id = req.params.id;
  ItemModal.findById({ _id: id })
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
});

app.put("/updateItem/:id", (req, res) => {
  const id = req.params.id;
  ItemModal.findByIdAndUpdate(
    { _id: id },
    { item: req.body.item, quantity: req.body.quantity, price: req.body.price }
  )
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
});

app.delete("/deleteItem/:id", (req, res) => {
    const id = req.params.id;
    ItemModal.findByIdAndDelete(
      { _id: id }
    )
      .then((items) => res.json(items))
      .catch((err) => res.json(err));
  });

app.post("/createItem", (req, res) => {
  ItemModal.create(req.body)
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
});
*/

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

