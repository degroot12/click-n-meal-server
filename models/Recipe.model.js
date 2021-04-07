const mongoose = require('mongoose');
const IngredientsModel = require('./Ingredients.model.js');

const RecipeSchema = new mongoose.Schema({
  name: String,
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1525999147711-835474620964?ixid=MXwxMjA3fDB8MHxzZWFy[…]58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  description: String,
  instructions: String,
  time: Number,
  priceCategory: {
    type: String,
    enum: ['cheap', 'normal', 'expensive']
  },
  ingredients: [{
    name: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'ingredient',
      // required: true
      type:String,
    },
    unit: {
      type: String,
      enum: ['piece', 'g', 'spoon', 'tablespoon', 'l', 'pinch', 'ml'],
      // required: true
    },
    amount: {
      type: Number,
      // required: true
    }
  }],
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5]
  },
  source: String,
  creator: String,
  weekday: {
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  },
  mealType: {
    type: String,
    enum: ['meat', 'vegetarian', 'vegan']
  },
  // allIngr: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'ingredient'
  // }
});

const RecipeModel = mongoose.model('recipe', RecipeSchema);
module.exports = RecipeModel;