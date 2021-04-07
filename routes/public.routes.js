const router = require('express').Router();
const RecipeModel = require('../models/Recipe.model');
const UserModel = require('../models/User.model');

// GET route for starter page
router.get('/', (req, res, next) => {
  console.log('---hello----')
})

// GET route for recipe details
router.get('/recipe/:id', (req, res, next) => {
  const id = req.params.id;

  RecipeModel.findById(id)
    .then((recipe) => {
      res.status(200).json(recipe)
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: 'Something went wrong when getting Recipe details',
        message: err
      })
    });
});


module.exports = router