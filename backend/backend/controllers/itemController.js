const Item = require('../models/Item');

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllItemsCount = async (req, res) => {
    try {
      const items = await Item.find();
      const itemCount = await Item.countDocuments();
      res.json({ items, itemCount });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

exports.getItem = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedItem = await Item.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(updatedItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(deletedItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
