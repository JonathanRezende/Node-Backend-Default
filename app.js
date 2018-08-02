'use strict'

// requiring packages
const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const app        = express()

// applying parsers
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// applying cors
app.use(cors())

// setting up default app port
app.set('port', (process.env.PORT || 3001))

// setting up default app routes
app.use('/', require('./routes'))

// exporting app module
module.exports = app