const TokenService = require('../service/auth/token.service')
const ApiError = require('../exceptions/api-error')

module.exports = async function (req) {
  try {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) {
      throw ApiError.UnauthorizedError()
    }

    const accessToken = authorizationHeader.split(' ')[1]
    if (!accessToken) {
      throw ApiError.UnauthorizedError()
    }

    const userData = TokenService.validateAccessToken(accessToken)
    if (!userData) {
      throw ApiError.UnauthorizedError()
    }

    req.user = userData
  } catch (error) {
    throw ApiError.UnauthorizedError()
  }
}
