//isLogged

//isOwner

//isAdmin

//isCarer ¿?

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
    } else {
        res.redirect('/login')
    }
}

const checkRole = (req, res, next) => {
    const { role } = req.session.currentUser
    if (role === 'ADMIN') {
        next()
    }
}


module.exports = {
    isLoggedOut,
    isLoggedIn,
    checkRole
}