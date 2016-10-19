var express = require('express');
var parser = require('body-parser')
var mongoose = require('mongoose');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Promise = require('bluebird');


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
app.use('/*', function(req, res, next) {
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

app.get('/users', function (req, res, next) {
  User.find().exec(function(err, user) {
    console.log('user get works');
    res.status(200).send(user);
  })
})
app.post('/users', function (req, res, next){
  var vote = req.body.vote;
  var username = req.body.user;
  var initiative = req.body.initiative
  User.findOne({username: username})
  .exec(function (err, user) {
    if (!user) {
      console.log('not a valid user')
    } else {
      if (user.votes[initiative] === vote) {
        delete user.votes[initiative]
      } else {
        user.votes[initiative] = vote;
      }
      User.update({_id: user._id}, { $set: { votes: user.votes}}, function(err, user) {
        if (err) { console.log(err)};
        res.send(user)
      })
    }
  })
})
  


app.listen(port, function(err) {
  if (err) {
    console.log("ERROR!!!!!")
  } else  {
    console.log("Started listening on port 8080"); 
  }
});

