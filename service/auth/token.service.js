const jwt = require('jsonwebtoken')
const TokenModel = require('../../models/Token')

class TokenService {

  async generateToken (payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30d' })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' })

    return { accessToken, refreshToken }
  }

  validateAccessToken (token) {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    } catch (error) {
      return null
    }
  }

  validateRefreshToken (token) {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_SECRET)
    } catch (error) {
      return null
    }
  }

  async saveToken (user, refreshToken) {
    const tokenData = await TokenModel.findOne({ user })

    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
    }

    const token = await TokenModel.create({ user, refreshToken })
    return token
  }

  async removeToken (refreshToken) {
    return TokenModel.deleteOne({ refreshToken })
  }

  async findToken (refreshToken) {
    return TokenModel.findOne({ refreshToken })
  }

}

module.exports = new TokenService()
