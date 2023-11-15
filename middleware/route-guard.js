const app = require("./../app")

const isLoggedOut = (req, res, next) => {
    if (!req.session.currentUser) {
        next()
    } else {
        res.redirect('/')
    }

}

const isLoggedIn = (req, res, next) => {
    if (req.session.currentUser) {
        next()
    }
    else {
        res.redirect('/login')
    }
}

const checkRole = (req, res, next) => {
    const { role } = req.session.currentUser
    if (role === 'ADMIN') {
        next()
    }
    else {
        res.redirect('/')
    }
}

const checkOwner = (req, res, next) => {

    const currentID = req.session.currentUser
    if (currentID._id == req.params.id || currentID.role === "ADMIN") {
        next()
    } else {
        res.redirect('/')
    }
}

const sessionStarted = (req, res, next) => {
    if (req.session.currentUser) {
        res.locals.appUser = {
            userName: req.session.currentUser.name,
            isAdmin: req.session.currentUser.role === "ADMIN",
            userImg: req.session.currentUser.img
        }
    }
    next()
}


module.exports = {
    isLoggedOut,
    isLoggedIn,
    checkRole,
    checkOwner,
    sessionStarted
}