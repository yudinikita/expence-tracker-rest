const Joi = require('joi')

module.exports = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .messages({
      'string.empty': `Email не должен быть пустым`,
      'string.email': `Введен некорректный email`,
      'any.required': `Email обязательное поле`,
    }),

  password: Joi.string()
    .min(6)
    .max(15)
    .required()
    .messages({
      'string.empty': `Пароль не должен быть пустым`,
      'string.min': `Пароль должен содержать минимум {#limit} символа`,
      'string.max': `Пароль должен содержать максимум {#limit} символов`,
      'any.required': `Пароль обязательное поле`,
      'any.ref': `Пароли должны совпадать`,
    }),

  repeatPassword: Joi.string()
    .equal(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'Пароли не совпадают' })
})
  .with('password', 'repeatPassword')
