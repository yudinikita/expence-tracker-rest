const { Schema, model, Types } = require('mongoose')

const CategorySchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Пожалуйста, введите название категории']
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  }
})

module.exports = model('Category', CategorySchema)
