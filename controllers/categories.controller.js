const Category = require('../models/Category')
const {validationResult} = require('express-validator')

// @desc    Получить все категории
// @route   GET /api/v1/categories
// @access  Public
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find()

    return res.status(200).json({
      success: true,
      count: categories.length,
      data: categories
    })
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Ошибка сервера'
    })
  }
}

// @desc    Добавить категорию
// @route   POST /api/v1/categories
// @access  Public
exports.addCategory = async (req, res, next) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
        message: 'Некорректное название категории'
      })
    }

    const category = await Category.create(req.body)

    return res.status(201).json({
      success: true,
      data: category
    })
  } catch (e) {
    if (e.name === 'ValidationError') {
      const errorsMessages = Object.values(e.errors).map(val => val.message)

      return res.status(400).json({
        success: false,
        errors: errorsMessages
      })
    } else {
      return res.status(500).json({
        success: false,
        message: 'Ошибка сервера'
      })
    }
  }
}

// @desc    Удалить категорию
// @route   DELETE /api/v1/categories/:id
// @access  Public
exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id)

    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Такой операции не найдено. Попробуйте еще раз.'
      })
    }

    await category.remove()

    return res.status(200).json({
      success: true,
      data: {}
    })
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Ошибка сервера'
    })
  }
}