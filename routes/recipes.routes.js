const router = require('express').Router();
const RecipeModel = require('../models/Recipe.model');
const UserModel = require('../models/User.model');


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

router.patch('/recipe/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, description, instructions, ingredients } = req.body;

  RecipeModel.findByIdAndUpdate(id, {$set: {name, description, instructions, ingredients}}, {new: true})
    .then((response) => {
      req.session.loggedInUser = response;
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong while editing recipe',
        message: err
      })
    })
});

module.exports = router