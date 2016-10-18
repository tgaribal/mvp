var mongoose = require('mongoose');

var InitiativeSchema = new mongoose.Schema ({
  name: String,
  subtitle: String,
  description: String,
  level: String,
  numChoices: Number,
  choices: {}
});

module.exports = mongoose.model('initiatives', InitiativeSchema);