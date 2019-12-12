const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SizeSchema = new Schema({
    name: { type: String, required: true },
    size: { type: Number, required: true },
    price: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = Size = mongoose.model("size", SizeSchema);
