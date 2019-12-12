const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ToppingSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = Topping = mongoose.model("topping", ToppingSchema);
