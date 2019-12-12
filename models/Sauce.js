const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SauceSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = Sauce = mongoose.model("sauce", SauceSchema);
