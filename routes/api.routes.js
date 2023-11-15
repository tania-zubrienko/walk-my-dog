const express = require('express');
const router = express.Router();
const User = require("./../models/User.model")

router.get("/carers-location", (req, res) => {

    User
        .find({ role: "CARER" })
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ message: "Server error", errorDetails: err }))
})

router.get("/carers-location/:carer_id", (req, res) => {

    const { carer_id } = req.params

    User
        .findById(carer_id)
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ message: "Server error", errorDetails: err }))
})


module.exports = router;