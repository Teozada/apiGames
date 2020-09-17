const express = require("express")
const routes = express.Router()
const jogosController = require("./controllers/jogos.controllers")
const userController = require("./controllers/user.controller")

routes.get("/",jogosController.index)
routes.post("/login",userController.login)
routes.post("/register",userController.create)

module.exports = routes
