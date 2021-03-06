'use strict';

var mongoose = require('mongoose');

var InitiativeSchema = new mongoose.Schema({
  name: String,
  subtitle: String,
  description: String,
  level: String,
  numChoices: Number,
  choices: []
});

module.exports = mongoose.model('initiatives', InitiativeSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbml0aWF0aXZlTW9kZWwuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiSW5pdGlhdGl2ZVNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGV2ZWwiLCJudW1DaG9pY2VzIiwiTnVtYmVyIiwiY2hvaWNlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxXQUFXQyxRQUFRLFVBQVIsQ0FBZjs7QUFFQSxJQUFJQyxtQkFBbUIsSUFBSUYsU0FBU0csTUFBYixDQUFxQjtBQUMxQ0MsUUFBTUMsTUFEb0M7QUFFMUNDLFlBQVVELE1BRmdDO0FBRzFDRSxlQUFhRixNQUg2QjtBQUkxQ0csU0FBT0gsTUFKbUM7QUFLMUNJLGNBQVlDLE1BTDhCO0FBTTFDQyxXQUFTO0FBTmlDLENBQXJCLENBQXZCOztBQVNBQyxPQUFPQyxPQUFQLEdBQWlCYixTQUFTYyxLQUFULENBQWUsYUFBZixFQUE4QlosZ0JBQTlCLENBQWpCIiwiZmlsZSI6ImluaXRpYXRpdmVNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5cbnZhciBJbml0aWF0aXZlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSAoe1xuICBuYW1lOiBTdHJpbmcsXG4gIHN1YnRpdGxlOiBTdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBTdHJpbmcsXG4gIGxldmVsOiBTdHJpbmcsXG4gIG51bUNob2ljZXM6IE51bWJlcixcbiAgY2hvaWNlczogW11cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCdpbml0aWF0aXZlcycsIEluaXRpYXRpdmVTY2hlbWEpOyJdfQ==