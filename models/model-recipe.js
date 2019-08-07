const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  ingredience:{
    type: Array,
    required: true,
  },
  dateCreated:{
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Recipe', recipeSchema)
