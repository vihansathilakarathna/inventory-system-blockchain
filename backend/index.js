const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const {Web3} = require("web3")

require('dotenv').config();

//const ItemModal = require("./backend/models/Item");
//const OrderModel = require("./backend/models/Order");
const StockModel = require("./backend/models/Stock");
const SalesModel = require("./backend/models/Sales");

const userRoutes = require('./backend/routes/userRoutes');
const itemRoutes = require('./backend/routes/itemRoutes');
const clientRoutes = require('./backend/routes/clientRoutes');
const orderRoutes = require('./backend/routes/orderRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api', clientRoutes);
app.use('/api/order', orderRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/inventory')
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error(err.message);
        process.exit(1);
    });

 

  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const web3 = new Web3('http://127.0.0.1:7545');

console.log(Web3);

web3.eth.getAccounts()
  .then(accounts => {
    console.log('Connected to Ganache. Accounts:', accounts);
  })
  .catch(error => {
    console.error('Error connecting to Ganache:', error.message, error.stack);
  });
