require("dotenv").config()
require("./db")
const express = require("express")


const hbs = require("hbs")
hbs.handlebars.registerHelper('formatDate', (fecha) => {
    return new Date(fecha).toLocaleString('es-ES', { year: 'numeric', month: 'numeric', day: 'numeric' });
});

const app = express()

require("./config")(app)


const projectName = "Walk-my-Dog"

app.locals.appTitle = `${projectName}`


require("./config/session.config")(app)

const { sessionStarted } = require('./middleware/route-guard')
app.use(sessionStarted)

require("./routes")(app)
require("./error-handling")(app)



module.exports = app
