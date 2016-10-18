var mongoose = require('mongoose');

var InitiativeSchema = mongoose.Schema ({
  name: String,
  subtitle: String,
  description: String,
  level: String,
  numChoices: Number,
  choices: {}
});

module.exports = mongoose.model('Initiatives', InitiativeSchema);