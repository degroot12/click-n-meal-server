const router = require('express').Router();
const UserModel = require('../models/User.model');

// GET route for starter page
router.get('/', (req, res, next) => {
  console.log('---hello----')
})


module.exports = router