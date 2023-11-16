const express = require('express')
const router = express.Router()
const User = require("./../models/User.model")
const Comment = require('./../models/Comment.model')
const Booking = require('./../models/Booking.model')
const { isLoggedIn } = require('./../middleware/route-guard')
const {
    getCarersList,
    getDetails,
    createBooking,
    createBookingHandler,
    createComment,
    deleteComment
} = require("./../controllers/carers.controllers")


router.get('/lista', getCarersList)

router.get('/:carer_id', isLoggedIn, getDetails)

router.get('/:carer_id/reservar', isLoggedIn, createBooking)

router.post('/reservar/:carer_id', isLoggedIn, createBookingHandler)

router.post('/comentarios/:carer_id', isLoggedIn, createComment)

router.post('/eliminar-comentario/:comment_id', isLoggedIn, deleteComment)

module.exports = router