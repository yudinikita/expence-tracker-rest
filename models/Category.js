const {Schema, model} = require('mongoose')

const CategorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Пожалуйста, введите название категории'],
  }
})

module.exports = model('Category', CategorySchema);