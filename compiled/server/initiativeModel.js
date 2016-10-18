'use strict';

var mongoose = require('mongoose');

var InitiativeSchema = mongoose.Schema({
  name: String,
  subtitle: String,
  description: String,
  level: String,
  numChoices: Number,
  choices: {}
});

module.exports = mongoose.model('Initiatives', InitiativeSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbml0aWF0aXZlTW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQVg7O0FBRUosSUFBSSxtQkFBbUIsU0FBUyxNQUFULENBQWlCO0FBQ3RDLFFBQU0sTUFBTjtBQUNBLFlBQVUsTUFBVjtBQUNBLGVBQWEsTUFBYjtBQUNBLFNBQU8sTUFBUDtBQUNBLGNBQVksTUFBWjtBQUNBLFdBQVMsRUFBVDtDQU5xQixDQUFuQjs7QUFTSixPQUFPLE9BQVAsR0FBaUIsU0FBUyxLQUFULENBQWUsYUFBZixFQUE4QixnQkFBOUIsQ0FBakIiLCJmaWxlIjoiaW5pdGlhdGl2ZU1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxudmFyIEluaXRpYXRpdmVTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEgKHtcbiAgbmFtZTogU3RyaW5nLFxuICBzdWJ0aXRsZTogU3RyaW5nLFxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxuICBsZXZlbDogU3RyaW5nLFxuICBudW1DaG9pY2VzOiBOdW1iZXIsXG4gIGNob2ljZXM6IHt9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgnSW5pdGlhdGl2ZXMnLCBJbml0aWF0aXZlU2NoZW1hKTsiXX0=