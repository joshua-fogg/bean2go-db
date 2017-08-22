const express = require('express')
const config = require('../knexfile').development
const router = express.Router()

const db = require('./db')

router.use(bodyParser.json())



router.get('/getlist', (req, res) => {})