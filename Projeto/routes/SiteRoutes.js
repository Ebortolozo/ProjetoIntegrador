const express = require('express')
const router = express.Router()
const SiteController = require("../controllers/SiteController")

//Middleware
const checkAuth = require('../helpers/auth').checkAuth

//Rotas para o restante do site

router.get('/home', checkAuth, SiteController.homepage)
router.get('/evento', checkAuth, SiteController.evento)
router.post('/evento', checkAuth, SiteController.eventoPost)
router.post('/diminuir', checkAuth, SiteController.diminuir)



// Rota dinâmica para empresas
router.get('/empresa/:id', checkAuth,  SiteController.showEmpresa);
router.get('/evento/:id', checkAuth,  SiteController.showEvento);
module.exports = router