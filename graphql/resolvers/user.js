const UserService = require('../../service/auth/user.service')
const UserValidation = require('../../validation/user.validation')

module.exports = {

  registration: async (args, { req, res }) => {
    try {
      const { email, password, repeatPassword } = args.userInput
      const userInput = await UserValidation.validateAsync({ email, password, repeatPassword })

      let userData = await UserService.registration(userInput.email, userInput.password)

      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

      return {
        id: userData.user.id,
        email: userData.user.email,
        isActivated: userData.user.isActivated,
        accessToken: userData.accessToken,
        refreshToken: userData.refreshToken,
      }
    } catch (error) {
      throw error
    }
  },

  activate: async (args, { res }) => {
    try {
      const activationLink = args.activationLink
      return await UserService.activate(activationLink) ? res.redirect(process.env.BASE_URL) : false
    } catch (error) {
      throw error
    }
  },

  login: async (args, { res }) => {
    try {
      const { email, password } = args.userInput

      const userData = await UserService.login(email, password)

      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

      return {
        id: userData.user.id,
        email: userData.user.email,
        isActivated: userData.user.isActivated,
        accessToken: userData.accessToken,
        refreshToken: userData.refreshToken,
      }
    } catch (error) {
      throw error
    }
  },

  logout: async (args, { req, res }) => {
    try {
      const { refreshToken } = req.cookies
      const isLogout = await UserService.logout(refreshToken)
      res.clearCookie('refreshToken')
      return isLogout
    } catch (error) {
      throw error
    }
  },

  refresh: async (args, { req, res }) => {
    try {
      const { refreshToken } = req.cookies

      const userData = await UserService.refresh(refreshToken)

      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

      return {
        id: userData.user.id,
        email: userData.user.email,
        isActivated: userData.user.isActivated,
        accessToken: userData.accessToken,
        refreshToken: userData.refreshToken,
      }
    } catch (error) {
      throw error
    }
  }

}

