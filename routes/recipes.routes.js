const router = require('express').Router();
const RecipeModel = require('../models/Recipe.model');
const UserModel = require('../models/User.model');


// POST route for creating a recipe
router.post('/create-recipe', (req, res, next) => {
  // const {name, description, instructions, time, priceCategory, ingrName, ingrUnit, ingrAmount, rating, source, creator, weekday, mealType, allIngr} = req.body;
  const {name, ingredients} = req.body;
  

  // let newIngredientObj = {
  //   ingrName,
  //   ingrUnit,
  //   ingrAmount
  // }

  // let newRecipeObj = {
  //   name,
  //   description,
  //   instructions, 
  //   time, 
  //   priceCategory,
  //   ingredients: newIngredientObj,
  //   rating,
  //   source,
  //   creator,
  //   weekday,
  //   mealType
  // }


  let newRecipeObj = {
    name: name,
    // description,
    // instructions, 
    // time, 
    // priceCategory,
    ingredients: ingredients,
    // rating,
    // source,
    // creator,
    // weekday,
    // mealType
  }
console.log('recipeModel---', newRecipeObj)

  // RecipeModel.create({name, description, instructions, time, priceCategory, ingredients, rating, source, creator, weekday, mealType, allIngr})
  //   .then((response) => {
  //     res.status(200).json(response)
  //   })
  //   .catch((err) => {
  //     res.status(500).json({
  //       errorMessage: 'Something went wrong creating a recipe',
  //       message: err
  //     })
  //   })
  RecipeModel.create(newRecipeObj)
  .then((response) => {
    console.log('response-----', response)
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

// TODO: add loggedin user als parameter
// PATCH | edit a mapitem - get specific mapitem based on ID -----------
router.patch('/mapitems/:mapitemId', (req, res) => {
  let itemId = req.params.mapitemId
  const {locdesc, finder, lat, long} = req.body
  // Key Objhistory is an object with three keys
  let newObjhistory = {
      finder: finder,
      lat: lat,
      long: long
    }    
  //Using Set for updating the location, and using a push for adding a finders loc to locdesc
  MapitemModel
    .findByIdAndUpdate(itemId, {
      $push: {objhistory: newObjhistory}, 
      $set: {locdesc: locdesc}},
      {new: true})
    .then((response) => {res.status(200).json(response)})
    .catch((err) => {
      console.log(err)
      res.status(500).json({
        errorMessage: 'Something went wrong while updating a mapitem',
        message: err })
    })
})

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