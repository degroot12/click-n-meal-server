const router = require('express').Router();
const RecipeModel = require('../models/Recipe.model');
const UserModel = require('../models/User.model');


// GET route for creating a recipe
router.get('/create', (req, res, next) => {
  res.json("create works");
})

// POST route for creating a recipe
router.post('/create', (req, res, next) => {
  const {name, description, instructions} = req.body;
  RecipeModel.create({name, description, instructions})
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong creating a recipe',
        message: err
      })
    })
})

// router.patch('/recipe')

module.exports = router