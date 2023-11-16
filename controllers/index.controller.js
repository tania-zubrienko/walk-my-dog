const User = require("./../models/User.model")

const loadIndex = (req, res, next) => {
    res.render("index")
}

const getUserList = (req, res, next) => {

    User
        .find()
        .then(allUsers => res.render("users/users-list", { allUsers }))
        .catch(err => next(err))

}


const loadServicesPage = (req, res, next) => res.render("places/services-map")



const changeProfileImg = (req, res, next) => {

    if (req.file) {
        const { path: avatar } = req.file
        const { _id: userId } = req.session.currentUser

        User
            .findByIdAndUpdate(userId, { avatar })
            .then(() => res.redirect(`/perfil`))
            .catch(err => next(err))
    } else {
        res.redirect("/")
    }

}


module.exports = {
    loadIndex,
    getUserList,
    loadServicesPage,
    changeProfileImg
}