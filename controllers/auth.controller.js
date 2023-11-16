const bcrypt = require("bcryptjs")
const saltRounds = 10
const User = require("./../models/User.model")


const signUp = (req, res, next) => {
    res.render('auth/signup-form')
}

const logIn = (req, res, next) => {
    res.render('auth/login-form')
}

const logInHandler = (req, res, next) => {
    const { email, password } = req.body
    User
        .findOne({ email })
        .then(foundUser => {
            if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
                req.session.currentUser = foundUser
                //console.log(req.session.currentUser)
                res.redirect("/")
            }
            else {
                res.render('auth/login-form', { errorMessage: "Email o contraseña incorrecta" })
            }
        })
        .catch(err => next(err))
}

const logOut = (req, res, next) => {
    req.session.destroy(() => res.redirect('/'))
}

const signUpHandler = (req, res, next) => {

    const { name, email, password, username, description, lng, lat, role } = req.body
    const address = { type: "Point", coordinates: [lat, lng] }

    let avatar
    req.file ? avatar = req.file.path : avatar = "/images/holaaa.jpeg"
    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(hashedPwd => User.create({ name, email, password: hashedPwd, username, description, address, avatar, role }))
        .then(() => res.redirect('/'))
        .catch(err => next(err))
}

module.exports = {
    signUp,
    signUpHandler,
    logIn,
    logInHandler,
    logOut
}