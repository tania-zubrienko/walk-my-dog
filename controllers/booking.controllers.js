const Booking = require("./../models/Booking.model")

const getBookings = (req, res, next) => {

    const { _id: userId, role } = req.session.currentUser

    if (role === "CARER") {
        Booking
            .find({ carer: userId })
            .populate("owner")
            .then(bookings => {
                res.render('bookings/carer-booking', { bookings })
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
}

const editBooking = (req, res, next) => {

    const { id: idBooking } = req.params

    Booking
        .findById(idBooking)
        .then(foundBooking => res.render("bookings/edit-booking", foundBooking))
        .catch(err => next(err))

}

const editBookingHandler = (req, res, next) => {

    const { id: idBooking } = req.params
    const { dateStart, dateFinish, phone, petType, petNumber, bookingNotes, status } = req.body

    Booking
        .findByIdAndUpdate(idBooking, { dateStart, dateFinish, phone, petType, petNumber, bookingNotes, status })
        .then(foundBooking => res.redirect("/perfil/reservas"))
        .catch(err => next(err))

}

const deleteBooking = (req, res, next) => {

    const { id: idBooking } = req.params

    Booking
        .findByIdAndDelete(idBooking)
        .then(() => res.redirect("/perfil/reservas"))
        .catch(err => next(err))
}

const acceptBooking = (req, res, next) => {

    const { id: idBooking } = req.params

    Booking
        .findByIdAndUpdate(idBooking, { status: "ACCEPTED" })
        .then(() => res.redirect("/perfil/reservas"))
        .catch(err => next(err))
}

const cancelBooking = (req, res, next) => {

    const { id: idBooking } = req.params

    Booking
        .findByIdAndUpdate(idBooking, { status: "CANCELED" })
        .then(() => res.redirect("/perfil/reservas"))
        .catch(err => next(err))
}

module.exports = {
    getBookings,
    editBooking,
    editBookingHandler,
    deleteBooking,
    acceptBooking,
    cancelBooking
}