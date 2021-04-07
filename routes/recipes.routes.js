const router = require('express').Router();
const RecipeModel = require('../models/Recipe.model');
const UserModel = require('../models/User.model');


// POST route for creating a recipe
router.post('/create', (req, res, next) => {
  const {name, description, instructions, time, priceCategory, ingredients, rating, source, creator, weekday, mealType, allIngr} = req.body;
  RecipeModel.create({name, description, instructions, time, priceCategory, ingredients, rating, source, creator, weekday, mealType, allIngr})
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: 'Something went wrong creating a recipe',
        message: err
      })
    })
})

router.patch('/recipe/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, description, instructions, time, priceCategory, ingredients, rating, source, creator, weekday, mealType, allIngr} = req.body;

  RecipeModel.findByIdAndUpdate(id, {$set: {name, description, instructions, time, priceCategory, ingredients, rating, source, creator, weekday, mealType, allIngr}}, {new: true})
    .then((response) => {
      req.session.loggedInUser = response;
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: 'Something went wrong while editing recipe',
        message: err
      })
    })
});

router.delete('/recipe/:id', (req, res, next) => {
  const { id } = req.params;

  RecipeModel.findByIdAndDelete(id)
    .then((deletedRecipe) => {
      res.status(200).json(deletedRecipe)
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: 'Recipe could not be deleted',
        message: err
      })
    })
})

module.exports = router