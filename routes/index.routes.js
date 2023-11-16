const express = require('express');
const router = express.Router();

const upload = require("./../middleware/uploader.middleware")

const {
  isLoggedIn,
  checkRole
} = require('../middleware/route-guard')

const {
  getUserList,
  loadIndex,
  loadServicesPage,
  changeProfileImg
} = require("./../controllers/index.controller")


router.get("/", loadIndex);

router.get("/listado-usuarios/", isLoggedIn, checkRole, getUserList)

router.get("/servicios", loadServicesPage)

router.post("/change-img/", upload.single("avatar"), changeProfileImg)

module.exports = router;