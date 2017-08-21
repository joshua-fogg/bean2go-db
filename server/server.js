var express = require('express')
var server = express()
var path = require('path')

var config = require('./knexfile').development
var db = require('knex')(config)

const html = require('../public/index.html') // requiring index.html
const apiRoutes = require('./api-routes') // directing to api-routes for api services.

server.use(express.static(path.join(__dirname, 'public'))) // setting server public folder
server.use('/api/v1', apiRoutes) // parsing api calls to api-routes
server.get('*', (req, res) => { // wildcard server route to send index && app
    res.send(html)
})

server.listen(PORT, function() {
    console.log('Listening on port', PORT)
})