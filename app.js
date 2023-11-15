require("dotenv").config()
require("./db")

const express = require("express")
const app = express()

const hbs = require("hbs")
hbs.handlebars.registerHelper('formatDate', (inputDate) => {
    return new Date(inputDate).toLocaleString('es-ES', { year: 'numeric', month: 'numeric', day: 'numeric' })
})

require("./config")(app)
require("./config/session.config")(app)

app.locals.appTitle = "Walk-my-Dog"

const sessionStarted = require('./middleware/locals.middleware')
app.use(sessionStarted)

require("./routes")(app)
require("./error-handling")(app)

module.exports = app