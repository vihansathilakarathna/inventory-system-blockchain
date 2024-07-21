const ClientModel = require('../models/Client');
const UserModel = require('../models/User');

const getClients = async (req, res) => {
    try {
        const clients = await ClientModel.find().populate('userId'); // Populate user details
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addClient = async (req, res) => {
    const { name, email, additionalData } = req.body;

    try {
        // First, create the User
        const newUser = new UserModel({ name, email, password: 'defaultpassword' });
        const savedUser = await newUser.save();

        // Then, create the Client with the userId
        const newClient = new ClientModel({ userId: savedUser._id, additionalData });
        const savedClient = await newClient.save();

        res.status(201).json(savedClient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getClients,
    addClient
};
