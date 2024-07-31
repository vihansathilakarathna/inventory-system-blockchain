const UserModel = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


exports.createUser = (req, res) => {
   
    const { name, email, password } = req.body; 
    bcrypt.hash(password, 10)
    .then(hash => {
        const newUser = new UserModel({ name, email, password: hash });
        newUser.save()
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
};


exports.login = (req, res) => {
    const { email, password } = req.body;
    
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        const token = jwt.sign(
                            { email: user.email, role: user.role },
                            "jwt-secret-key",
                            { expiresIn: '1d' } 
                        );
                        res.cookie('token', token, { httpOnly: true });
                        return res.json({ Status: "Success", role: user.role });
                    } else {
                        return res.status(401).json("Password Incorrect");
                    }
                });
            } else {
                return res.status(404).json("No record");
            }
        })
        .catch(err => res.status(500).json(err));
};

exports.getUsers = (req, res) => {
    UserModel.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(400).json(err));
};

exports.getUsersCount = async (req, res) => {
    try {
      const users = await UserModel.find();
      const userCount = await UserModel.countDocuments();
      res.status(200).json({ users, userCount });
    } catch (err) {
      res.status(400).json(err);
    }
  };

exports.createClient = (req, res) => {
    const { name, email } = req.body;
    const defaultPassword = "defaultPassword"; 

    bcrypt.hash(defaultPassword, 10)  
        .then(hash => {
            const newClient = new UserModel({ name, email, password: hash });
            newClient.save()
                .then(client => {
                    const { password, ...clientData } = client._doc; 
                    res.status(201).json(clientData);
                })
                .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(400).json(err));
};


