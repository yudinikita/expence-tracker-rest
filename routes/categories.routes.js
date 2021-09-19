const {Router} = require('express')
const router = Router()
const {check} = require('express-validator')
const {getCategories, addCategory, deleteCategory} = require('../controllers/categories.controller')

router
  .route('/')
  .get(getCategories)
  .post(
    [
      check('name', 'Некорректное название категории').not().isEmpty().trim().escape().isLength({ min: 3, max: 44 }),
    ],
    addCategory,
  )

router
  .route('/:id')
  .delete(deleteCategory)

module.exports = router