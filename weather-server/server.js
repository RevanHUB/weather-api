var express = require('express')
var cors = require('cors');
var weather = require('./weather-stats.js')
var app = express()
 
app.use(cors())
 
app.get('/', function (req, res, next) {
  res.send(weather.stats);
})
app.get('/q=:city' , function (req, res, next) {
    var location = req.params.city;
    var search = weather.stats.find((place) => place.city.toUpperCase().includes(location.toUpperCase()) );
    res.send(search);
  })
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})