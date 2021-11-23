const TransactionModel = require('../models/Transactions')

class TransactionService {

  async getTransactions (user) {
    const transactionsFetched = await TransactionModel.find({ user }).sort({ createdAt: 1 }).populate('category')

    return await transactionsFetched.map(transaction => {
      return {
        ...transaction._doc,
        _id: transaction.id,
        createdAt: new Date(transaction._doc.createdAt).toISOString(),
        updatedAt: new Date(transaction._doc.updatedAt).toISOString(),
      }
    })
  }

  async getTransactionDetail (user, _id) {
    const transactionFetched = await TransactionModel.findOne({ user, _id }).populate('category')

    return {
      ...transactionFetched._doc,
      _id: transactionFetched.id,
      createdAt: new Date(transactionFetched._doc.createdAt).toISOString(),
      updatedAt: new Date(transactionFetched._doc.updatedAt).toISOString(),
    }
  }

  async createTransaction (user, transaction) {
    const newTransaction = new TransactionModel({ user, ...transaction })

    await newTransaction.save()

    return newTransaction.populate('category')
  }

  async deleteTransaction (_id) {
    const result = await TransactionModel.deleteOne({ _id })
    return result.deletedCount === 1
  }

  async deleteManyTransaction (category) {
    const result = await TransactionModel.deleteMany({ category })
    return result.deletedCount === 1
  }

  async updateTransaction (_id, transaction) {
    return TransactionModel.findOneAndUpdate(
      { _id },
      { $set: { ...transaction } },
      { returnOriginal: false }
    ).populate('category')
  }

  async updateTransactionsByCategory (oldCategory, newCategory) {
    return TransactionModel.updateMany(
      { category: oldCategory },
      { $set: { category: newCategory } }
    )
  }

}

module.exports = new TransactionService()
