const User = require("./../models/User.model")
const Comment = require('./../models/Comment.model')
const Booking = require('./../models/Booking.model')

const getCarersList = (req, res) => {
    User
        .find({ role: 'CARER' })
        .then(users => res.render('users/carer-list', { users }))
        .catch(err => next(err))
}


module.exports = {
    getCarersList
}