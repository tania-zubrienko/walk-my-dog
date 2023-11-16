const express = require('express');
const router = express.Router();
const { getAllLocations, getOneLocation } = require("./../controllers/api.controllers")

router.get("/carers-location", getAllLocations)

router.get("/carers-location/:carer_id", getOneLocation)


module.exports = router;