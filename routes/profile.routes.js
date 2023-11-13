const express = require('express')
const router = express.Router()
const User = require("./../models/User.model")

//GET Detalles del perfil
router.get("/", (req, res, next) => {
    const { _id: userId } = req.session.currentUser
    User
        .findById(userId)
        .then(foundUser => res.res.render("profile/my-profile", foundUser))
        .catch(err => next(err))
})

//GET Editar perfil
router.get('/editar/:id', (req, res, next) => {
    res.send("EDITAMOS")
})
//POST Editar perfil

//POST Eliminar perfil
router.get('/eliminar/:id', (req, res, next) => {
    res.send("ELIMINAMOS")
})
//GET Ver listado de reservas
router.get('/:id/reservas', (req, res, next) => {
    res.send("VER LISTADO DE RESERVAS")
})

//GET Editar reservas (solo para propietario y admin)

//POST Editar reservas

//POST Aceptar reserva (botón que cambia estado de la reserva PENDING / ACCEPTED / CANCLED)

//POST Eliminar reserva (solo para propietario y admin)

module.exports = router