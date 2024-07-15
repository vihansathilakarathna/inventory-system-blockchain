const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserModel = require('./backend/models/User')

const app =express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/inventory");
/* { useNewUrlParser: true,
    useUnifiedTopolog: true,});
    const db = mongoose.connection;*/

    app.post('/login', (req,res) => {
        const {email, password} = req.body;
        UserModel.findOne({email: email})
        .then(user => {
            if(user) {
                if(user.password === password) {
                    res.json("Success")
                } else {
                    res.json("The Password is incorrect")
                }
            } else {
                res.json("No record existed")
            }
        })
    })

    app.post('/register', (req, res) => {
        UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
    })
/*
    db.on('error',console.error.bind(console, 'connection error: '));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    })

    const itemRoutes = require('./backend/routes/itemRoutes');
    app.use('/api/items', itemRoutes);
*/
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    })
