const express = require('express')
const router = express.Router()
const User = require("./../models/User.model")
const { isLoggedIn, isLoggedOut } = ('./')
//GET listado
router.get('/lista', (req, res) => {
    User
        .find({ role: 'CARER' })
        .then(users => {
            res.render('users/carer-list.hbs', {
                users: users,
            })
        })
        .catch(err => console.log(err))
})
//GET detalles

router.get('/:carer_id', (req, res, next) => {
    const { id: carer_id } = req.params
    User
        .findById(carer_id)
        //.then(carer => res.render('booking/create-booking', carer))
        .catch(err => console.log(err))

})

//POST hacer reserva


//GET dejar comentario

//POST dejar comentario

//POST valorar



module.exports = router