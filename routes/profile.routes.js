const express = require('express')
const router = express.Router()
const User = require("./../models/User.model")
const Booking = require("./../models/Booking.model")
const Comment = require("./../models/Comment.model")

const { isLoggedIn } = require('./../middleware/route-guard')
const { checkOwner } = require('./../middleware/route-guard')
const uploaderMiddleware = require("./../middleware/uploader.middleware")

const formatDate = require('./../utils/capitalize')

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

    const { id: userId } = req.params

    User
        .findById(userId)
        .then(foundUser => res.render("profile/edit-profile", foundUser))
        .catch(err => next(err))
})

//POST Editar perfil
router.post('/editar/:id', isLoggedIn, checkOwner, uploaderMiddleware.single("avatar"), (req, res, next) => {

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
router.get('/reservas', (req, res, next) => {

    const { _id: userId, role } = req.session.currentUser

    if (role === "CARER") {
        Booking
            .find({ carer: userId })
            .populate("owner")
            .then(bookings => {
                res.render('bookings/career-booking', { bookings })
            })
            .catch(err => next(err))
    }
    else {
        Booking
            .find({ owner: userId })
            .populate("carer")
            .then(bookings => {
                res.render('bookings/user-booking', { bookings })
            })
            .catch(err => next(err))
    }
})

//GET Editar reservas 
router.get("/reservas/editar/:id", (req, res, next) => {

    const { id: idBooking } = req.params

    Booking
        .findById(idBooking)
        .then(foundBooking => res.render("bookings/edit-booking", foundBooking))
        .catch(err => next(err))

})

//POST Editar reservas handler
router.post("/reservas/editar/:id", (req, res, next) => {

    const { id: idBooking } = req.params
    const { dateStart, dateFinish, phone, petType, petNumber, bookingNotes, status } = req.body

    Booking
        .findByIdAndUpdate(idBooking, { dateStart, dateFinish, phone, petType, petNumber, bookingNotes, status })
        .then(foundBooking => res.redirect("/perfil/reservas"))
        .catch(err => next(err))

})

//GET eliminar reservas
router.post("/reservas/eliminar/:id", (req, res, next) => {

    const { id: idBooking } = req.params

    Booking
        .findByIdAndDelete(idBooking)
        .then(() => res.redirect("/perfil/reservas"))
        .catch(err => next(err))
})
//POST Eliminar reserva (solo para propietario y admin)

//POST Aceptar reserva (botón que cambia estado de la reserva PENDING / ACCEPTED / CANCLED)
router.get('/reservas/accept/:id', (req, res, next) => {

    const { id: idBooking } = req.params

    Booking
        .findByIdAndUpdate(idBooking, { status: "ACCEPTED" })
        .then(() => res.redirect("/perfil/reservas"))
        .catch(err => next(err))
})

router.get('/reservas/cancel/:id', (req, res, next) => {

    const { id: idBooking } = req.params

    Booking
        .findByIdAndUpdate(idBooking, { status: "CANCELED" })
        .then(() => res.redirect("/perfil/reservas"))
        .catch(err => next(err))
})

module.exports = router