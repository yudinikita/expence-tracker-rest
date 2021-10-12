const UserModel = require('../../models/User')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const MailService = require('./mail.service')
const TokenService = require('./token.service')
const UserDto = require('../../dtos/user.dto')

class UserService {

  async registration (email, password) {
    const candidate = await UserModel.findOne({ email })

    if (candidate) {
      throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
    }

    const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10))
    const activationLink = uuid.v4()

    const user = await UserModel.create({
      email,
      password: hashedPassword,
      activationLink
    })

    await MailService.sendActivationMail(email, `${process.env.BASE_URL}/api/activate/${activationLink}`)

    const userDto = new UserDto(user)
    const tokens = await TokenService.generateToken({ ...userDto })
    await TokenService.saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }

  async login (email, password) {
    const user = await UserModel.findOne({ email })
    if (!user) {
      throw new Error(`Пользователь с почтовым адресом ${email} не найден`)
    }

    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
      throw new Error(`Неверный пароль`)
    }

    const userDto = new UserDto(user)
    const tokens = await TokenService.generateToken({ ...userDto })
    await TokenService.saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }

  async logout (refreshToken) {
    const token = await TokenService.removeToken(refreshToken)
    return token.deletedCount === 1
  }

  async activate (activationLink) {
    const user = await UserModel.findOne({ activationLink })
    if (!user) {
      throw new Error('Некорректная ссылка активации')
    }

    user.isActivated = true
    await user.save()

    return true
  }

  async refresh (refreshToken) {
    if (!refreshToken) {
      throw new Error('Ошибка авторизации')
    }

    const userData = await TokenService.validateRefreshToken(refreshToken)
    const tokenFromDb = await TokenService.findToken(refreshToken)

    if (!userData || !tokenFromDb) {
      throw new Error('Ошибка авторизации')
    }

    const user = await UserModel.findById(userData.id)
    const userDto = new UserDto(user)
    const tokens = await TokenService.generateToken({ ...userDto })
    await TokenService.saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }

}

module.exports = new UserService()
