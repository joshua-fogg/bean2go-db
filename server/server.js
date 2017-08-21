var path = require('path')
var express = require('express')
var server = express()


const PORT = process.env.PORT || 3000 // establish PORT, add deployment port ||
const apiRoutes = require('./api-routes') // directing to api-routes for api services.


server.listen(PORT, function() { console.log('Listening on port', PORT) })
server.use(express.static(path.join(__dirname, 'public'))) // setting server public folder


server.use('/api/v1', apiRoutes) // parsing api calls to api-routes
server.use('*', (req, res) => { // wildcard server route to send index && app
    res.send('../public/index.html')
})