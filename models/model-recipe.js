const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredient: {
    type: Array,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now,
  },
  step: {
    type: Array,
  },
  image: {
    type: String,
  },
  tag: {
    type: Array,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);
