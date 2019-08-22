const express = require('express');
const router = express.Router();


const Recipe = require('../models/model-recipe');

// Send GET request to /recipes to READ a list of recipe
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

// Send GET request to /recipes/:id to READ a recipe
router.get('/:id', getRecipeById, (req, res) => {
  res.json(res.recipe);
})

// Send POST request to /recipes to CREATE a new recipe
router.post('/', async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    ingredience: req.body.ingredience,
    dateCreated: req.body.dateCreated,
    steps: req.body.steps,
    image: req.body.image,
    tag: req.body.tag
  })
  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Send PATCH request to /recipes/:id to UPDATE a recipe
router.patch('/:id', getRecipeById, async (req, res) => {
  if (req.body.name == null) {
    res.recipe.name = req.body.name
  }
  if (req.body.ingredience == null) {
    res.recipe.ingredience = req.body.ingredience
  }
  try {
    const newRecipe =  await res.recipe.save()
    res.json(newRecipe)
  } catch(error){
    res.status(400).json({ message: error.message })
  }
})

// Send DELETE request to /recipes/:id to DELETE a recipe
router.delete('/:id', getRecipeById, async (req, res) => {
  try {
    await res.recipe.remove()
    res.json({ message: 'Deleted Recipe' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Helper function to find recipe by id
async function getRecipeById (req, res, next){
  let recipe
  try {
    recipe = await Recipe.findById(req.params.id)
    if (recipe == null) {
      return res.status(404).json({ message: 'Cannot find recipe' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
  res.recipe = recipe
  next()
}


module.exports = router;
