const express = require('express')
const router = express.Router()
const AuthController = require("../controllers/AuthController")

//Middleware 
const checkInvAuth = require("../helpers/invAuth").checkInvAuth

//Rotas de login e registro

router.get('/', AuthController.login)
router.get('/login',checkInvAuth, AuthController.login)
router.post('/login', AuthController.loginPost)
router.get('/register',checkInvAuth, AuthController.register)
router.post('/register', AuthController.registerPost)
router.get('/logout', AuthController.logout)


module.exports = router