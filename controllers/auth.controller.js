const User = require('../models/User')
const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// @desc    Зарегистрировать пользователя
// @route   POST /api/v1/auth/register
// @access  Public
exports.userRegister = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
        message: 'Некорректные данные при регистрации'
      })
    }

    const {email, password} = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({
        success: false,
        message: 'Такой пользователь уже существует'
      })
    }

    const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10))

    const user = new User({ email, password: hashedPassword })
    await user.save()

    return res.status(201).json({
      success: true,
      message: 'Пользователь создан'
    })
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Ошибка сервера при регистрации'
    })
  }
}

// @desc    Авторизация пользователя
// @route   POST /api/v1/auth/login
// @access  Public
exports.userLogin = async (req, res) => {
  try {
    const errors = validationResult(req)
    const messageText = 'Неверный email или пароль, попробуйте еще раз'

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: messageText
      })
    }

    const {email, password} = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        message: messageText
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({
        message: messageText
      })
    }

    const jwtSecret = process.env.JWT_SECRET

    const token = jwt.sign(
      { userId: user.id },
      jwtSecret,
      { expiresIn: '1h' }
    )

    return res.status(200).json({
      token,
      userId: user.id
    })
  } catch (e) {
    return res.status(500).json({
      message: 'Что-то пошло не так, попробуйте снова'
    })
  }
}