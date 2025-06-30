const router = require('express').Router()
const Outlet = require('../models/Outlet')

router.get('/', async (req, res) => {
  const outlets = await Outlet.find().lean()
  res.json(outlets)
})

router.post('/', async (req, res) => {
  const outlet = await Outlet.create(req.body)
  res.json(outlet)
})

module.exports = router
