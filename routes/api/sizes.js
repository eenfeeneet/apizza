const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Size Model
const Size = require("../../models/Size");

// @route   GET api/sizes
// @desc    Get All Items
// @access  Public
router.get("/", (req, res) => {
    Size.find()
        .sort({ date: 1 })
        .then(sizes => res.json(sizes));
});

// @route   POST api/sizes
// @desc    Create A Size
// @access  Private
router.post("/", (req, res) => {
    const newSize = new Size({
        name: req.body.name,
        size: req.body.size,
        price: req.body.price
    });

    newSize.save().then(size => res.json(size));
});

// @route   DELETE api/sizes/:id
// @desc    Delete A Size
// @access  Private
router.delete("/:id", auth, (req, res) => {
    Size.findById(req.params.id)
        .then(size => size.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
