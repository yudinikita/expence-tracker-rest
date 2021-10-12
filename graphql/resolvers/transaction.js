const TransactionService = require('../../service/transaction.service')

module.exports = {

  getTransactions: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      const { id } = req.user
      return await TransactionService.getTransactions(id)
    } catch (error) {
      throw error
    }
  },

  getTransactionDetail: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      const { id } = req.user
      return await TransactionService.getTransactionDetail(id, args.transaction)
    } catch (error) {
      throw error
    }
  },

  createTransaction: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      const { id } = req.user
      return await TransactionService.createTransaction(id, args.transaction)
    } catch (error) {
      throw error
    }
  },

  deleteTransaction: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      return await TransactionService.deleteTransaction(args.id)
    } catch (error) {
      throw error
    }
  },

  updateTransaction: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      return await TransactionService.updateTransaction(args.id, args.transaction)
    } catch (error) {
      throw error
    }
  },

}
