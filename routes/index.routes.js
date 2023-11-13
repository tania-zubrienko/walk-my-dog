const express = require('express');
const router = express.Router();
const User = require("./../models/User.model")
const { isLoggedIn, isLoggedOut, checkRole } = require('../middleware/route-guard')
const upload = require("./../middleware/uploader.middleware")

/* GET home page */
router.get("/", (req, res, next) => {

  res.render("index",)

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


router.post("/change-img/", upload.single("avatar"), (req, res, next) => {
  if (req.file) {

    const { _id } = req.session.currentUser
    const { path: avatar } = req.file
    User
      .findByIdAndUpdate(_id, { avatar })
      .then(() => res.redirect(`/perfil/${id}`))
      .catch(err => next(err))

  } else {
    res.redirect("/")
  }
})
module.exports = router;