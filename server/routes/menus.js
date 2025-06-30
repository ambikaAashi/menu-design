const router = require('express').Router()
const Menu = require('../models/Menu')

router.get('/', async (req, res) => {
  const menus = await Menu.find().lean()
  res.json(menus)
})

router.post('/', async (req, res) => {
  const menu = await Menu.create(req.body)
  res.json(menu)
})

module.exports = router
