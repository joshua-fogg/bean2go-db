const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('./db')

router.use(bodyParser.json())

// router.get('/getlist', (req, res) => {})

module.exports = router