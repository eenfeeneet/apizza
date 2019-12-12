const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
    name: { type: mongoose.Schema.Types.ObjectId, ref: "Pizza" },
    size: { type: mongoose.Schema.Types.ObjectId, ref: "Size" },
    date: { type: Date, default: Date.now }
});

module.exports = Order = mongoose.model("order", OrderSchema);
