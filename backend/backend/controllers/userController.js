const UserModel = require('../models/User');

exports.createUser = (req, res) => {
    const newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    newUser.save()
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json(err));
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The Password is incorrect");
                }
            } else {
                res.json("No record existed");
            }
        })
        .catch(err => res.status(400).json(err));
};
