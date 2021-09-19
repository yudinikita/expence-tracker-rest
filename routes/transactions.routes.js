const {Router} = require('express')
const router = Router()
const {check} = require('express-validator')
const {getTransactions, addTransaction, deleteTransaction, getDetailTransaction} = require('../controllers/transactions.controller')
const auth = require('../middleware/auth.middleware')

router
  .route('/')
  .get(auth, getTransactions)
  .post(
    [
      check('amount', 'Некорректная сумма').isLength({ max: 9}),
      check('category', 'Некорректная категория').not().isEmpty(),
      check('commentary', 'Некорректный комментарий').isLength({ max: 67})
    ],
    auth,
    addTransaction
  )

router
  .route('/:id')
  .delete(auth, deleteTransaction)
  .get(auth, getDetailTransaction)

module.exports = router