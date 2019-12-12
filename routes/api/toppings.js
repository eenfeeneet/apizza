const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Topping Model
const Topping = require("../../models/Topping");

// @route   GET api/toppings
// @desc    Get All Toppings
// @access  Public
router.get("/", (req, res) => {
    Topping.find()
        .sort({ date: -1 })
        .then(toppings => res.json(toppings));
});

// @route   GET api/toppings/meat
// @desc    Get All meat Toppings
// @access  Public
router.get("/meat", (req, res) => {
    Topping.find({ type: "Meat" })
        .sort({ date: -1 })
        .then(toppings => res.json(toppings));
});

// @route   GET api/toppings/vegetable
// @desc    Get All vegetable Toppings
// @access  Public
router.get("/vegetable", (req, res) => {
    Topping.find({ type: "Vegetable" })
        .sort({ date: -1 })
        .then(toppings => res.json(toppings));
});

// @route   GET api/toppings/seafood
// @desc    Get All seafood Toppings
// @access  Public
router.get("/seafood", (req, res) => {
    Topping.find({ type: "Seafood" })
        .sort({ date: -1 })
        .then(toppings => res.json(toppings));
});

// @route   GET api/toppings/cheese
// @desc    Get All cheese Toppings
// @access  Public
router.get("/cheese", (req, res) => {
    Topping.find({ type: "Cheese" })
        .sort({ date: -1 })
        .then(toppings => res.json(toppings));
});

// @route   POST api/toppings
// @desc    Create A Topping
// @access  Private
router.post("/", (req, res) => {
    const newTopping = new Topping({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price
    });

    newTopping.save().then(topping => res.json(topping));
});

// @route   DELETE api/toppings/:id
// @desc    Delete A Topping
// @access  Private
router.delete("/:id", (req, res) => {
    Topping.findById(req.params.id)
        .then(topping =>
            topping.remove().then(() => res.json({ success: true }))
        )
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
