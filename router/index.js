const Router = require('express').Router
const userController = require('')
const router = new Router()

router.get('/activate/:link', userController.activate)

module.exports = router
