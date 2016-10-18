var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

  var UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    votes: {}
  });

  User = mongoose.model('users', UserSchema);

  User.prototype.hashPassword = function (next) {
    var cipher = Promise.promisify (bcrypt.hash);
    return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();
    })
  }

  UserSchema.pre('save', function(next) {
    this.hashPassword(next);
  });

  module.exports = User;