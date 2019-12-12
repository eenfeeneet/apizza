const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Crust Model
const Crust = require("../../models/Crust");

// @route   GET api/crusts
// @desc    Get All Crusts
// @access  Public
router.get("/", (req, res) => {
    Crust.find()
        .sort({ date: -1 })
        .then(crusts => res.json(crusts));
});

// @route   POST api/crusts
// @desc    Create A Crust
// @access  Private
router.post("/", (req, res) => {
    const newCrust = new Crust({
        name: req.body.name,
        price: req.body.price
    });

    newCrust.save().then(crust => res.json(crust));
});

// @route   DELETE api/crusts/:id
// @desc    Delete A Crust
// @access  Private
router.delete("/:id", auth, (req, res) => {
    Crust.findById(req.params.id)
        .then(crust => crust.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
