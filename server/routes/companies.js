const router = require('express').Router()
const Company = require('../models/Company')

router.get('/', async (req, res) => {
  const companies = await Company.find().lean()
  res.json(companies)
})

router.post('/', async (req, res) => {
  const company = await Company.create(req.body)
  res.json(company)
})

module.exports = router
