const express = require('express');
const router = express.Router();
const User = require("./../models/User.model")
const { isLoggedIn, isLoggedOut, checkRole } = require('../middleware/route-guard')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


router.get("/listado-usuarios/", isLoggedIn, checkRole, (req, res, next) => {
  User
    .find()
    .then(all => res.render("users/users-list", { all }))
    .catch(err => next(err))
})

router.get("/servicios", (req, res, next) => {
  res.render("places/services-map")
})

module.exports = router;