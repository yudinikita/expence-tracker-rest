const BalanceService = require('../../service/balance.service')
const { isAuth } = require('../../utils/utils')

module.exports = {

  getBalance: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      const { id } = req.user
      return await BalanceService.getBalance(id)
    } catch (error) {
      throw error
    }
  },

  getBalancePerDate: async (args, { req, res }) => {
    if (!req.user) return res.status(401)
    if (!req.user.isActivated) return res.status(403)
    try {
      const { id } = req.user
      return await BalanceService.getBalancePerDate(id, args.startDate, args.endDate)
    } catch (error) {
      throw error
    }
  },

}
