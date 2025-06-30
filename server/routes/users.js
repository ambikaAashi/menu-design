const router = require('express').Router()
const User = require('../models/User')

// simple list users
router.get('/', async (req, res) => {
  const users = await User.find().lean()
  res.json(users)
})

module.exports = router
