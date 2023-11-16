const User = require("./../models/User.model")


const getAllLocations = (req, res) => {

    User
        .find({ role: "CARER" })
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ message: "Server error", errorDetails: err }))
}

const getOneLocation = (req, res) => {

    const { carer_id } = req.params

    User
        .findById(carer_id)
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ message: "Server error", errorDetails: err }))
}


module.exports = {
    getAllLocations,
    getOneLocation
}