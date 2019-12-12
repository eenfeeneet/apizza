const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Order Model
const Order = require("../../models/Order");

// @route   GET api/orders
// @desc    Get All Orders
// @access  Public
router.get("/", (req, res) => {
    Order.find()
        .sort({ date: -1 })
        .then(orders => res.json(orders));
});

// @route   POST api/orders
// @desc    Create A Order
// @access  Private
router.post("/", (req, res) => {
    const newOrder = new Order({
        name: req.body.name,
        price: req.body.price
    });

    newOrder.save().then(order => res.json(order));
});

// @route   DELETE api/orders/:id
// @desc    Delete A Order
// @access  Private
router.delete("/:id", auth, (req, res) => {
    Order.findById(req.params.id)
        .then(order => order.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
