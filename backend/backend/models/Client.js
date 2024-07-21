const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: String ,
    email: String
});

const ClientModel = mongoose.model("client", ClientSchema);
module.exports = ClientModel;