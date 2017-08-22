var path = require('path')
var express = require('express')

var apiRoutes = require('./api-routes') // directing to api-routes for api services.
var server = express()

server.use(express.static(path.join(__dirname, '../public'))) // setting server public folder
const PORT = process.env.PORT || 3000 // establish PORT, add deployment port ||


server.listen(PORT, function() {
    console.log('Listening on port', PORT)
})



server.use('/api/v1/', apiRoutes) // parsing api calls to api-routes
server.use('*', (req, res) => {
        res.send('../public/index.html')
    })
    // wildcard server route to send index && app