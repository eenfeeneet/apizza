const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CrustSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = Crust = mongoose.model("crust", CrustSchema);
