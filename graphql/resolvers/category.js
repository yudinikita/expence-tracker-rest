const CategoryService = require('../../service/category.service')
const { isAuth } = require('../../utils/utils')

module.exports = {

  getCategories: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      const { id } = req.user
      return await CategoryService.getCategories(id)
    } catch (error) {
      throw error
    }
  },

  createCategory: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      const { id } = req.user
      return await CategoryService.createCategory(id, args.category)
    } catch (error) {
      throw error
    }
  },

  deleteCategory: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      return await CategoryService.deleteCategory(args.id)
    } catch (error) {
      throw error
    }
  },

  updateCategory: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      return await CategoryService.updateCategory(args.id, args.category)
    } catch (error) {
      throw error
    }
  },

}
