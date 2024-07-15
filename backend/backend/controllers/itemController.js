const Item = require('../models/Item');

exports.getItems = async(req,res) => {
    const items = await Item.find();
    res.json(items)
}

exports.createItems = async(req,res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.json (savedItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}