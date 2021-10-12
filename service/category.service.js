const CategoryModel = require('../models/Category')

class CategoryService {

  async getCategories (user) {
    return CategoryModel.find({ user })
  }

  async createCategory (user, category) {
    const newCategory = new CategoryModel({ user, ...category })

    await newCategory.save()

    return newCategory
  }

  async deleteCategory (_id) {
    const result = await CategoryModel.deleteOne({ _id })
    return result.deletedCount === 1
  }

  async updateCategory (_id, category) {
    return CategoryModel.findOneAndUpdate(
      { _id },
      { $set: { ...category } },
      { returnOriginal: false }
    )
  }

}

module.exports = new CategoryService()
