const express = require('express')
const router = express.Router()
const User = require("./../models/User.model")

//GET listado
router.get('/cuidadores-lista', (req, res) => {
    User
        .find({ role: 'CARER' })
        .then(users => {
            res.render('users/carer-list.hbs', {
                users: users,
            })
        })
        .catch(err => console.log(err))
})
//GET detalles

//GET hacer reserva

//POST hacer reserva

//GET dejar comentario

//POST dejar comentario

//POST valorar



module.exports = router