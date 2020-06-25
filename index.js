// Clear terminal screen
process.stdout.write('\x1B[2J\x1B[0f')
require('dotenv').config()

const express = require('express')

const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')

// NONGOOSE
mongoose.connect(process.env.MONGO_URL,
  {
    dbName: process.env.MONGO_DB || 'test',
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }, err => {
    if (err) { throw new Error(err) }
    console.info('💾 Connected to Mongo Database \n')
  })

// ADDING MIDDLEWARES & ROUTER
const app = express()
  .use(cors())
  .use(morgan('dev'))
  .use(express.json())
  .use('/api', require('./api/routes'))

// Init server
app.listen(process.env.PORT || 2222, (err) => {
  if (err) { throw new Error(err) }
  console.info('>'.repeat(40))
  console.info('💻  Reboot Server Live')
  console.info(`📡  PORT: http://localhost:${process.env.PORT || 2222}`)
  console.info('>'.repeat(40) + '\n')
})
