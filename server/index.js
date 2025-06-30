const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/menu-design')
  .then(() => console.log('Mongo connected'))
  .catch(err => console.error(err))

app.use('/api/users', require('./routes/users'))
app.use('/api/companies', require('./routes/companies'))
app.use('/api/outlets', require('./routes/outlets'))
app.use('/api/menus', require('./routes/menus'))

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server listening on ${port}`))
