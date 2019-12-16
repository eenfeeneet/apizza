const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
  any: {}
});

module.exports = Order = mongoose.model('order', OrderSchema);
