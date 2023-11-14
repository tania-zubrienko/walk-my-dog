const express = require('express');
const router = express.Router();
const User = require("./../models/User.model")

//llamada a Places => conversion a JSON GET
router.get("/carers-location", (req, res, next) => {
    //res.send("de aqui sacamos ubicacion")
    User
        .find({ role: "CARER" })
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ message: "Server error", errorDetails: err }))
})
//userlist GET
router.get("/carers-location/:carer_id", (req, res, next) => {
    const { carer_id } = req.params
    User
        .findById(carer_id)
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ message: "Server error", errorDetails: err }))
})

module.exports = router;