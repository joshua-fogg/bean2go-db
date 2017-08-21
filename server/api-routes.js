const path = require('path')
const config = require('../knexfile').development
var db = require('./db')

server.get('/getlist', (req, res) => {
    let coffeeList = db('coffee_list').select('*')
    res.json(coffeeList)
})