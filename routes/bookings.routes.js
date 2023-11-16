const express = require('express');
const router = express.Router();
const {
    getBookings,
    editBooking,
    editBookingHandler,
    deleteBooking,
    acceptBooking,
    cancelBooking
} = require('./../controllers/booking.controllers')

router.get('/', getBookings)

router.get("/editar/:id", editBooking)

router.post("/editar/:id", editBookingHandler)

router.post("/eliminar/:id", deleteBooking)

router.get('/accept/:id', acceptBooking)

router.get('/cancel/:id', cancelBooking)

module.exports = router;