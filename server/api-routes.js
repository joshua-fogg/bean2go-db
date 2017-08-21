const express = require('express')
const server = express()
const path = require('path')
const knex = require('knex')
const config = require('../knexfile').development
var db = require('knex')(config)

server.get('/getlist', (req, res) => {
    let coffeeList = db('coffee_list').select('*')
    res.json(coffeeList)
})