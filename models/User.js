const {Schema, model, Types} = require('mongoose')

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  transactions: [{
    type: Types.ObjectId,
    ref: 'Transaction'
  }]
})

module.exports = model('User', UserSchema)