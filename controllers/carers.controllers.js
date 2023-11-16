const User = require("./../models/User.model")
const Comment = require('./../models/Comment.model')
const Booking = require('./../models/Booking.model')

const getCarersList = (req, res) => {
    User
        .find({ role: 'CARER' })
        .then(users => res.render('users/carer-list', { users }))
        .catch(err => next(err))
}

const getDetails = (req, res, next) => {
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
}

const createBooking = (req, res, next) => {
    const { carer_id } = req.params
    res.render('bookings/create-booking', { carer_id })
}

const createBookingHandler = (req, res, next) => {

    const { carer_id: carer } = req.params
    const { _id: owner } = req.session.currentUser
    const { dateStart, dateFinish, phone, address, petType, petNumber, bookingNotes } = req.body

    Booking
        .create({ dateStart, dateFinish, phone, address, petType, petNumber, bookingNotes, carer, owner })
        .then(() => res.redirect('/cuidadores/lista'))
        .catch(err => next(err))
}

const createComment = (req, res, next) => {

    const { carer_id: carer } = req.params
    const { _id: owner } = req.session.currentUser
    const { content, rating } = req.body

    Comment
        .create({ content, rating, carer, owner })
        .then(() => res.redirect(`/cuidadores/${carer}`))
        .catch(err => next(err))
}

const deleteComment = (rec, res, next) => {
    const { comment_id: comment } = req.params

    Comment
        .findByIdAndDelete(comment)
        .then(() => res.redirect(`/cuidadores/${carer_id}`))
        .catch(err => next(err))
}

module.exports = {
    getCarersList,
    getDetails,
    createBooking,
    createBookingHandler,
    createComment,
    deleteComment
}