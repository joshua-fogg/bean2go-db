var express = require('express')
var server = express()
var path = require('path')

var config = require('./knexfile').development
var db = require('knex')(config)

var PORT = process.env.PORT || 3000
const apiRoutes = require('./api-routes')

server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1', apiRoutes)

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})