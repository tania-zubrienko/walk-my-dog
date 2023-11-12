const express = require('express');
const router = express.Router();
const User = require("./../models/User.model")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


router.get("/listado-usuarios/", (req, res, next) => {
  User
    .find()
    .then(all => res.render("users/users-list", { all }))
    .catch(err => next(err))
})
module.exports = router;
