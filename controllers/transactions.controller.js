const Transaction = require('../models/Transaction')
const Category = require('../models/Category')
const {validationResult} = require('express-validator')

// @desc    Получить все операции
// @route   GET /api/v1/transactions
// @access  Private
exports.getTransactions = async (req, res) => {
  try {
    const ownerId = req.user.userId
    const transactions = await Transaction.find({ ownerId })

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    })
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Ошибка сервера при получении операций'
    })
  }
}

// @desc    Добавить операцию
// @route   POST /api/v1/transactions
// @access  Private
exports.addTransaction = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
        message: 'Некорректные данные при создании операции'
      })
    }

    const category = await Category.findById(req.body.category._id)

    if (!category) {
      return res.status(400).json({
        success: false,
        message: 'Такой категории не создано'
      })
    }

    const transaction = new Transaction({
      ...req.body, owner: req.user.userId
    })

    await transaction.save()

    return res.status(201).json({
      success: true,
      data: transaction
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
        errors: e.message,
        success: false,
        message: 'Ошибка сервера при создании операции'
      })
    }
  }
}

// @desc    Удалить операцию
// @route   DELETE /api/v1/transactions/:id
// @access  Private
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id)

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: 'Такой операции не найдено. Попробуйте еще раз.'
      })
    }

    await transaction.remove()

    return res.status(200).json({
      success: true,
      data: {}
    })
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Ошибка сервера при удалении операции'
    })
  }
}

// @desc    Получает информацию об операции по id
// @route   GET /api/v1/transactions/:id
// @access  Private
exports.getDetailTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id)

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: 'Такой операции не найдено. Попробуйте еще раз.'
      })
    }

    //const test = await Category.findById(transaction.category)

    return res.status(200).json({
      success: true,
      data: transaction
    })
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Ошибка сервера при поиске операции'
    })
  }
}