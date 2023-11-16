module.exports = app => {
    const indexRoutes = require("./index.routes");
    app.use("/", indexRoutes);

    const authRoutes = require("./auth.routes")
    app.use("/", authRoutes)

    const apiROutes = require("./api.routes")
    app.use("/api", apiROutes)

    const carersRoutes = require("./carers.routes")
    app.use("/cuidadores", carersRoutes)

    const profileRoutes = require("./profile.routes")
    app.use("/perfil", profileRoutes)

    const bookingRoutes = require("./bookings.routes")
    app.use('/perfil/reservas', bookingRoutes)
}