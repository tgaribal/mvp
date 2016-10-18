var express = require('express');
var parser = require('body-parser')
var mongoose = require('mongoose');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var iVote = require('client/app')
// var createStore = require('redux').createStore;
// var provider = require('redux-react').Provider;
// var render = require('handleRender');

var Initiative = require('./initiativeModel');
var User = require('./userModel');

var app = express();
var port = 8080;



mongoose.connect('mongodb://localhost/ivote');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
  console.log('Open Mongoose connection')
});



// app.use(render);
app.use(parser.json());
app.use('/initiatives', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/initiatives', function (req, res, next) {
  Initiative.find().exec(function(err, initiative) {
    console.log('get works');
    res.status(200).send(initiative); 
  })
})

app.post('/initiatives', function (req, res, next) {
})



app.listen(port, function(err) {
  if (err) {
    console.log("ERROR!!!!!")
  } else  {
    console.log("Started listening on port 8080"); 
  }
});

