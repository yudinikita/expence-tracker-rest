const {Router} = require('express')
const router = Router()
const {check} = require('express-validator')
const {userRegister, userLogin} = require('../controllers/auth.controller')

router
  .route('/register')
  .post(
    [
      check('email', 'Некорректный email').isEmail(),
      check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6}),
    ],
    userRegister,
  )

router
  .route('/login')
  .post(
    [
      check('email', 'Введите корректный email').normalizeEmail().isEmail(),
      check('password', 'Введите корректный пароль').exists(),
    ],
    userLogin,
  )

module.exports = router