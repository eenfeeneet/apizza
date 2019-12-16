const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Sauce = require("./sauces");

// Pizza Model
const Pizza = require("../../models/Pizza");

// @route   GET api/pizzas
// @desc    Get All Pizzas
// @access  Public
router.get("/", (req, res) => {
    Pizza.find()
        .sort({ date: -1 })
        .then(pizzas => res.json(pizzas));
});

// @route   GET api/pizzas/classic
// @desc    Get All classic Pizzas
// @access  Public
router.get("/classic", (req, res) => {
    Pizza.find({ type: "Classic" })
        .sort({ date: -1 })
        .then(pizzas => res.json(pizzas));
});

// @route   GET api/pizzas/specialty
// @desc    Get All specialty Pizzas
// @access  Public
router.get("/specialty", (req, res) => {
    Pizza.find({ type: "Specialty" })
        .sort({ date: -1 })
        .then(pizzas => res.json(pizzas));
});

// @route   POST api/pizzas
// @desc    Create A Pizza
// @access  Private
router.post("/", (req, res) => {
    const { name, sauce, ingredients, type, description, price } = req.body;
    const newPizza = new Pizza({
        name: name,
        sauce: sauce,
        ingredients: ingredients,
        type: type,
        price: price,
        description: description
    });

    newPizza.save().then(pizza => res.json(pizza));
});

// @route   DELETE api/pizzas/:id
// @desc    Delete A Pizza
// @access  Private
router.delete("/:id", auth, (req, res) => {
    Pizza.findById(req.params.id)
        .then(pizza => pizza.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
