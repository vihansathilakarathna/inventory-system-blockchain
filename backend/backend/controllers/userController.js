
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
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign(
                            { email: user.email, role: user.role },
                            "jwt-secret-key",
                            { expiresIn: '1d' } 
                        );
                        res.cookie('token', token, { httpOnly: true });
                        return res.json({Status: "Success", role: user.role});
                    } else {
                        return res.json("Password Incorrect");
                    }
                });
            } else {
                return res.json("No record");
            }
        })
        .catch(err => res.status(500).json(err));
};