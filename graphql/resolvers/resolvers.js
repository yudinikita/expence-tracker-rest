const { merge } = require('lodash')

const transaction = require('./transaction')
const category = require('./category')
const balance = require('./balance')
const analytics = require('./analytics')
const user = require('./user')

module.exports = merge(
  transaction,
  category,
  balance,
  analytics,
  user
)
