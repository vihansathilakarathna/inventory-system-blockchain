const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserModel = require("./backend/models/User");
const ItemModal = require("./backend/models/Item");

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/inventory"),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

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

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The Password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

/*
    db.on('error',console.error.bind(console, 'connection error: '));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    })

    const itemRoutes = require('./backend/routes/itemRoutes');
    app.use('/api/items', itemRoutes);
*/
