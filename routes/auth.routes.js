const express = require('express')
const router = express.Router()

const uploaderMiddleware = require("./../middleware/uploader.middleware")

const {
    signUp,
    signUpHandler,
    logIn,
    logInHandler,
    logOut
} = require("./../controllers/auth.controller")


router.get('/signup', signUp)

router.post('/signup', uploaderMiddleware.single("avatar"), signUpHandler)

router.get('/login', logIn)

router.post('/login', logInHandler)

router.get('/logout', logOut)


module.exports = router;