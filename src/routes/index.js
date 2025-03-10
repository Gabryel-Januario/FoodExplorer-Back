const { Router } = require("express")

const usersRouter = require("./users.routes")
const dishesRouter = require("./dishes.routes")
const ingredietsRouter = require("./ingredients.routes")
const sessionsRouter = require("./sessions.routes")

const routes = Router()

routes.use("/users", usersRouter)
routes.use("/sessions", sessionsRouter)
routes.use("/dishes", dishesRouter)
routes.use("/ingredients", ingredietsRouter)

module.exports = routes
