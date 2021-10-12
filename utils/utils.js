const TokenService = require('../service/auth/token.service')
const ApiError = require('../exceptions/api-error')

function getUserData (req, authToken) {
  if (req) {
    const authHeader = req.headers.authorization
    if (authHeader) {
      const accessToken = authHeader.replace('Bearer ', '')
      if (!accessToken) {
        return null
      }

      const userData = TokenService.validateAccessToken(accessToken)
      if (!userData) {
        return null
      }

      return userData
    }
  } else if (authToken) {
    const userData = TokenService.validateAccessToken(authToken)
    if (!userData) {
      return null
    }
    return userData
  }

  return null
}

function isAuth (req, res = {}) {
  if (!req.user) throw ApiError.UnactivatedError()
  if (!req.user.isActivated) throw ApiError.UnactivatedError()
}

module.exports = {
  getUserData,
  isAuth
}
