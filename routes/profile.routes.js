const express = require('express')
const router = express.Router()

const uploaderMiddleware = require("./../middleware/uploader.middleware")
const { isLoggedIn, checkOwner } = require('./../middleware/route-guard')
const {
    getProfileDetails,
    editProfile,
    editProfileHandler,
    deleteProfile
} = require('./../controllers/profile.controllers')


router.get("/", isLoggedIn, getProfileDetails)

router.get('/editar/:id', isLoggedIn, checkOwner, editProfile)

router.post('/editar/:id', isLoggedIn, checkOwner, uploaderMiddleware.single("avatar"), editProfileHandler)

router.get('/eliminar/:id', isLoggedIn, deleteProfile)

module.exports = router