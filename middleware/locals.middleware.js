const sessionStarted = (req, res, next) => {
    if (req.session.currentUser) {
        res.locals.appUser = {
            userName: req.session.currentUser.name,
            isAdmin: req.session.currentUser.role === "ADMIN",
            // userImg: req.session.currentUser.img
        }
    }
    next()
}

module.exports = sessionStarted