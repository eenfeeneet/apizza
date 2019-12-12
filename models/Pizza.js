const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PizzaSchema = new Schema({
    name: { type: String, required: true },
    sauce: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    description: { type: String, required: true },
    type: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = Pizza = mongoose.model("pizza", PizzaSchema);
