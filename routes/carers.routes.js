const express = require('express')
const router = express.Router()
const User = require("./../models/User.model")

const Booking = require('./../models/Booking.model')
const { isLoggedIn, isLoggedOut } = require('./../middleware/route-guard')

//GET listado
router.get('/lista', (req, res) => {
    User
        .find({ role: 'CARER' })
        .then(users => {
            res.render('users/carer-list', {
                users: users,
            })
        })
        .catch(err => console.log(err))
})

//GET detalles
router.get('/:carer_id', isLoggedIn, (req, res, next) => {
    const { carer_id } = req.params
    User
        .findById(carer_id)
        .then(carer => res.render('users/carer-details', carer))
        .catch(err => console.log(err))

})

//GET hacer reserva
router.get('/:carer_id/reservar', isLoggedIn, (req, res, next) => {
    const { carer_id } = req.params
    res.render('bookings/create-booking', { carer_id })


})
//POST hacer reserva
router.post('/reservar/:carer_id', isLoggedIn, (req, res, next) => {
    const { carer_id: carer } = req.params
    const { _id: owner } = req.session.currentUser
    const { dateStart, dateFinish, phone, address, petType, petNumber, bookingNotes } = req.body
    Booking
        .create({ dateStart, dateFinish, phone, address, petType, petNumber, bookingNotes, carer, owner })
        .then(booking => console.log(booking))
        .then(() => res.redirect('/cuidadores/lista'))

        .catch(err => console.log(err))

})

//GET dejar comentario


//POST dejar comentario

//POST valorar



module.exports = router