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



// hacer una ruta generica que devuelve json de la bd para procesar posteriori en servicios ---> OUTPUT : JSON con todo 
module.exports = router;