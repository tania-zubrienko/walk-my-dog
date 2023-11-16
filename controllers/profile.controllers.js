const User = require("./../models/User.model")
const Booking = require("./../models/Booking.model")
const Comment = require("./../models/Comment.model")

const getProfileDetails = (req, res, next) => {

    const { _id: userId } = req.session.currentUser

    User
        .findById(userId)
        .then(foundUser => res.render("profile/my-profile", foundUser))
        .catch(err => next(err))
}

const editProfile = (req, res, next) => {

    const { id: userId } = req.params

    User
        .findById(userId)
        .then(foundUser => res.render("profile/edit-profile", foundUser))
        .catch(err => next(err))
}

const editProfileHandler = (req, res, next) => {

    const { _id: userId } = req.session.currentUser
    const { name, email, username, description } = req.body

    User
        .findByIdAndUpdate(userId, { name, email, username, description })
        .then(() => res.redirect("/perfil"))
        .catch(err => next(err))
}

const deleteProfile = (req, res, next) => {

    const { _id: userId } = req.session.currentUser
    req.session.destroy()

    User
        .findByIdAndDelete(userId)
        .then(() => res.redirect("/"))
        .catch(err => next(err))
}

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
    getProfileDetails,
    editProfile,
    editProfileHandler,
    deleteProfile,
    getBookings,
    editBooking,
    editBookingHandler,
    deleteBooking,
    acceptBooking,
    cancelBooking
}