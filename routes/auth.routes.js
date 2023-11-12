const express = require('express')
const router = express.Router()

//encriptación de contraseñas
const bcrypt = require("bcryptjs")
const saltRounds = 10

const User = require("./../models/User.model")




//signup GET POST
router.get('/signup', (req, res, next) => {
    res.render('auth/signup-form')
})
router.post('/signup', (req, res, next) => {
    const { name, email, password, username, description, avatar, lng, lat } = req.body
    const adress = { type: "Point", coordinates: [lat, lng] }
    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(hashedPwd => User.create({ name, email, username, description, adress, avatar, password: hashedPwd }))
        .then(newUser => {
            const { id: userId } = newUser
            return User
                .findByIdAndUpdate(userId, { owner: userId })
                .populate('owner')
        })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})



//login GET POST
router.get('/login', (req, res, next) => {
    res.render('auth/login-form')
})
router.post('/login', (req, res, next) => {
    const { email, password } = req.body
    User
        .findOne({ email })
        .then(foundUser => {
            if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
                req.session.currentUser = foundUser
                //console.log(req.session.currentUser)
                res.redirect("/")
            }
            else {
                res.render('auth/login-form', { errorMessage: "Email o contraseña incorrecta" })
            }
        })
        .catch(err => next(err))
})



//logout POST
router.get('/logout', (req, res, next) => {
    req.session.destroy(() => res.redirect('/'))
})



module.exports = router;