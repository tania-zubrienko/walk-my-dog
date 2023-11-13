const express = require('express')
const router = express.Router()
const User = require("./../models/User.model")
const { isLoggedIn } = require('./../middleware/route-guard')
const { checkOwner } = require('./../middleware/route-guard')


//GET Detalles del perfil
router.get("/", isLoggedIn, (req, res, next) => {
    const { _id: userId } = req.session.currentUser
    User
        .findById(userId)
        .then(foundUser => res.render("profile/my-profile", foundUser))
        .catch(err => next(err))
})

//GET Editar perfil
router.get('/editar/:id', isLoggedIn, checkOwner, (req, res, next) => {
    const { _id: userId } = req.session.currentUser
    User
        .findById(userId)
        .then(foundUser => res.render("profile/edit-profile", foundUser))
        .catch(err => next(err))
})
//POST Editar perfil
router.post('/editar/:id', isLoggedIn, (req, res, next) => {
    const { _id: userId } = req.session.currentUser
    const { name, email, username, description } = req.body
    User
        .findByIdAndUpdate(userId, { name, email, username, description })
        .then(() => res.redirect("/perfil"))
        .catch(err => next(err))

})

//POST Eliminar perfil
router.get('/eliminar/:id', isLoggedIn, (req, res, next) => {
    const { _id: userId } = req.session.currentUser
    User
        .findByIdAndDelete(userId)
        .then(() => res.redirect("/"))
        .catch(err => next(err))

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