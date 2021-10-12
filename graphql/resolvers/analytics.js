const AnalyticsService = require('../../service/analytics.service')
const { isAuth } = require('../../utils/utils')

module.exports = {

  getAnalyticsBalance: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      const { id } = req.user
      return await AnalyticsService.getAnalyticsBalance(id, args.startDate, args.endDate)
    } catch (error) {
      throw error
    }
  },

  getAnalyticsAverage: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      const { id } = req.user
      return await AnalyticsService.getAnalyticsAverage(id, args.startDate, args.endDate)
    } catch (error) {
      throw error
    }
  },

  getAnalyticsExpense: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      const { id } = req.user
      return await AnalyticsService.getAnalyticsExpense(id, args.startDate, args.endDate)
    } catch (error) {
      throw error
    }
  },

  getAnalyticsIncome: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      const { id } = req.user
      return await AnalyticsService.getAnalyticsIncome(id, args.startDate, args.endDate)
    } catch (error) {
      throw error
    }
  },

}
