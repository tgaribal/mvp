var express = require('express');
var parser = require('body-parser')
var mongoose = require('mongoose');

var Initiative = require('./initiativeModel');
var User = require('./userModel');

var app = express();
app.use(parser.json());

mongoose.connect('mongodb://localhost/ivote');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
  console.log('Open Mongoose connection')
});



app.get('/initiatives', function (req, res) {
  console.log("helpo!")
  var initiatives = {}
  Initiative.find().exec(function(err, initiative) {
    console.log(initiative)
    initiatives[initiative.name] = initiative; 
  })
  console.log(initiatives)
  res.status(200).send(initiatives);
})

// app.post('/', function (req, res) {
//   console.log('helpppppp')
//   res.send('post works');
// })
// exports.getInitiatives = function (req, res) {
//   Initiative.find().exec(function (err, initiatives) {
//     res.status(200).send(initiatives);
//   })
// }

// exports.vote = function (req, res) {
//   console.log(req.body);
// }


app.listen(8080, function(err) {
  if (err) {
    console.log("ERROR!!!!!")
  } else  {
    console.log("Started listening on port 8080");
    
  }
});
