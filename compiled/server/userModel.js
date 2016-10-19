'use strict';

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

// User.prototype.hashPassword = function (next) {
//   var cipher = Promise.promisify (bcrypt.hash);
//   return cipher(this.password, null, null).bind(this)
//   .then(function(hash) {
//     this.password = hash;
//     next();
//   })
// }

// UserSchema.pre('save', function(next) {
//   this.hashPassword(next);
// });

module.exports = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci91c2VyTW9kZWwuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiYmNyeXB0IiwiUHJvbWlzZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsInBhc3N3b3JkIiwidm90ZXMiLCJVc2VyIiwibW9kZWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFdBQVdDLFFBQVEsVUFBUixDQUFmO0FBQ0EsSUFBSUMsU0FBU0QsUUFBUSxlQUFSLENBQWI7QUFDQSxJQUFJRSxVQUFVRixRQUFRLFVBQVIsQ0FBZDs7QUFFRSxJQUFJRyxhQUFhLElBQUlKLFNBQVNLLE1BQWIsQ0FBb0I7QUFDbkNDLFlBQVU7QUFDUkMsVUFBTUMsTUFERTtBQUVSQyxjQUFVLElBRkY7QUFHUkMsWUFBUTtBQUhBLEdBRHlCO0FBTW5DQyxZQUFVO0FBQ1JKLFVBQU1DLE1BREU7QUFFUkMsY0FBVTtBQUZGLEdBTnlCO0FBVW5DRyxTQUFPO0FBVjRCLENBQXBCLENBQWpCOztBQWFBQyxPQUFPYixTQUFTYyxLQUFULENBQWUsT0FBZixFQUF3QlYsVUFBeEIsQ0FBUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQVcsT0FBT0MsT0FBUCxHQUFpQkgsSUFBakIiLCJmaWxlIjoidXNlck1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbnZhciBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHQtbm9kZWpzJyk7XG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG5cbiAgdmFyIFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICB1c2VybmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdm90ZXM6IHt9XG4gIH0pO1xuXG4gIFVzZXIgPSBtb25nb29zZS5tb2RlbCgndXNlcnMnLCBVc2VyU2NoZW1hKTtcblxuICAvLyBVc2VyLnByb3RvdHlwZS5oYXNoUGFzc3dvcmQgPSBmdW5jdGlvbiAobmV4dCkge1xuICAvLyAgIHZhciBjaXBoZXIgPSBQcm9taXNlLnByb21pc2lmeSAoYmNyeXB0Lmhhc2gpO1xuICAvLyAgIHJldHVybiBjaXBoZXIodGhpcy5wYXNzd29yZCwgbnVsbCwgbnVsbCkuYmluZCh0aGlzKVxuICAvLyAgIC50aGVuKGZ1bmN0aW9uKGhhc2gpIHtcbiAgLy8gICAgIHRoaXMucGFzc3dvcmQgPSBoYXNoO1xuICAvLyAgICAgbmV4dCgpO1xuICAvLyAgIH0pXG4gIC8vIH1cblxuICAvLyBVc2VyU2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uKG5leHQpIHtcbiAgLy8gICB0aGlzLmhhc2hQYXNzd29yZChuZXh0KTtcbiAgLy8gfSk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBVc2VyOyJdfQ==