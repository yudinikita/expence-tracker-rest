const CategoryModel = require('../models/Category')
const transactionService = require('./transaction.service')

class CategoryService {

  async getCategories (user) {
    return CategoryModel.find({ user }).sort({ title: 1 })
  }

  async createCategory (user, category) {
    const newCategory = new CategoryModel({ user, ...category })

    await newCategory.save()

    return newCategory
  }

  async deleteCategory (id) {
    const result = await CategoryModel.deleteOne({ _id: id })
    return result.deletedCount === 1
  }

  async deleteCategoryReplace (id, newId) {
    const modifiedTransactions = await transactionService.updateTransactionsByCategory(id, newId)
    const result = await CategoryModel.deleteOne({ _id: id })
    return result.deletedCount === 1
  }

  async deleteCategoryWithTransactions (id) {
    const result = await CategoryModel.deleteOne({ _id: id })
    const deletedTransactions = await transactionService.deleteManyTransaction(id)
    return result.deletedCount === 1
  }

  async updateCategory (id, category) {
    return CategoryModel.findOneAndUpdate(
      { _id: id },
      { $set: { ...category } },
      { returnOriginal: false }
    )
  }

}

module.exports = new CategoryService()
