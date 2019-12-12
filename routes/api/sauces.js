const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Sauce Model
const Sauce = require("../../models/Sauce");

// @route   GET api/sauces
// @desc    Get All Sauces
// @access  Public
router.get("/", (req, res) => {
    Sauce.find()
        .sort({ date: -1 })
        .then(sauces => res.json(sauces));
});

// @route   POST api/sauces
// @desc    Create A Sauce
// @access  Private
router.post("/", (req, res) => {
    const newSauce = new Sauce({
        name: req.body.name
    });

    newSauce.save().then(sauce => res.json(sauce));
});

// @route   DELETE api/sauces/:id
// @desc    Delete A Sauce
// @access  Private
router.delete("/:id", auth, (req, res) => {
    Sauce.findById(req.params.id)
        .then(sauce => sauce.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
