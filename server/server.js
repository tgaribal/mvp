var express = require('express');
var parser = require('body-parser')
var mongoose = require('mongoose');
var createStore = require('redux').createStore;
var provider = require('redux-react').Provider;

var Initiative = require('./initiativeModel');
var User = require('./userModel');

var app = express();
var port = 8080;



app.use(parser.json());
app.use(express.static('client'));

mongoose.connect('mongodb://localhost/ivote');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
  console.log('Open Mongoose connection')
});



app.get('/initiatives', function (req, res) {
  Initiative.find().exec(function(err, initiative) {
    console.log('get works');
    res.status(200).send(initiative); 
  })
})

app.post('/initiatives', function (req, res) {
})


// exports.getInitiatives = function (req, res) {
//   Initiative.find().exec(function (err, initiatives) {
//     res.status(200).send(initiatives);
//   })
// }

// exports.vote = function (req, res) {
//   console.log(req.body);
// }


app.listen(port, function(err) {
  if (err) {
    console.log("ERROR!!!!!")
  } else  {
    console.log("Started listening on port 8080");
    
  }
});

