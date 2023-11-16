const express = require('express')
const router = express.Router()
const User = require("./../models/User.model")
const Comment = require('./../models/Comment.model')
const Booking = require('./../models/Booking.model')
const { isLoggedIn, isLoggedOut } = require('./../middleware/route-guard')
const {
    getCarersList
} = require("./../controllers/carers.controllers")

//GET listado
router.get('/lista', getCarersList)

//GET detalles
router.get('/:carer_id', isLoggedIn, (req, res, next) => {
    const { carer_id } = req.params
    const promises = [
        User.findById(carer_id),
        Comment.find({ carer: carer_id }).populate('owner')
    ]
    Promise
        .all(promises)
        .then(response => {
            console.log(response)
            const user = response[0]
            const comments = response[1]

            let counter = 0
            comments.forEach(eachComment => {
                counter += eachComment.rating
            })
            let ratingAverage = counter / comments.length
            const ratingAveragePer = (ratingAverage / 10).toFixed(2)



            res.render("users/carer-details", { user, comments, ratingAverage, ratingAveragePer })
        })
        .catch(err => next(err))
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
        .then(() => res.redirect('/cuidadores/lista'))
        .catch(err => next(err))
})



//POST dejar comentario
router.post('/comentarios/:carer_id', isLoggedIn, (req, res, next) => {

    const { carer_id: carer } = req.params
    const { _id: owner } = req.session.currentUser
    const { content, rating } = req.body

    Comment
        .create({ content, rating, carer, owner })
        .then(() => res.redirect(`/cuidadores/${carer}`))
        .catch(err => next(err))
})

router.post('/eliminar-comentario/:comment_id', isLoggedIn, (rec, res, next) => {

    router.post('/eliminar-comentario/:comment_id', isLoggedIn, (rec, res, next) => {
        const { comment_id: comment } = req.params

        Comment
            .findByIdAndDelete(comment)
            .then(() => res.redirect(`/cuidadores/${carer_id}`))
            .catch(err => next(err))
    })
})
//POST valorar



module.exports = router