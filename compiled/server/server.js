'use strict';

var express = require('express');
var parser = require('body-parser');
// var mongoose = require('mongoose');

// var User = require('./initiativeModel');
// var Initiative = require('./userModel');

var app = express();
app.use(parser.json());

// var db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', function () {

// });

// mongoose.connect('mongodb://localhost/ivote');

app.get('/', function (req, res) {
  console.log("helpo!");
  res.send('get works');
});

app.post('/', function (req, res) {
  console.log('helpppppp');
  res.send('post works');
});
// exports.getInitiatives = function (req, res) {
//   Initiative.find().exec(function (err, initiatives) {
//     res.status(200).send(initiatives);
//   })
// }

// exports.vote = function (req, res) {
//   console.log(req.body);
// }
app.listen(8080, function (err) {
  if (err) {
    console.log("ERROR!!!!!");
  } else {
    console.log("Started listening on port 8080");
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9zZXJ2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFVBQVUsUUFBUSxTQUFSLENBQVY7QUFDSixJQUFJLFNBQVMsUUFBUSxhQUFSLENBQVQ7Ozs7OztBQU1KLElBQUksTUFBTSxTQUFOO0FBQ0osSUFBSSxHQUFKLENBQVEsT0FBTyxJQUFQLEVBQVI7Ozs7Ozs7Ozs7QUFZQSxJQUFJLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBVSxHQUFWLEVBQWUsR0FBZixFQUFvQjtBQUMvQixVQUFRLEdBQVIsQ0FBWSxRQUFaLEVBRCtCO0FBRS9CLE1BQUksSUFBSixDQUFTLFdBQVQsRUFGK0I7Q0FBcEIsQ0FBYjs7QUFLQSxJQUFJLElBQUosQ0FBUyxHQUFULEVBQWMsVUFBVSxHQUFWLEVBQWUsR0FBZixFQUFvQjtBQUNoQyxVQUFRLEdBQVIsQ0FBWSxXQUFaLEVBRGdDO0FBRWhDLE1BQUksSUFBSixDQUFTLFlBQVQsRUFGZ0M7Q0FBcEIsQ0FBZDs7Ozs7Ozs7OztBQWFBLElBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsVUFBUyxHQUFULEVBQWM7QUFDN0IsTUFBSSxHQUFKLEVBQVM7QUFDUCxZQUFRLEdBQVIsQ0FBWSxZQUFaLEVBRE87R0FBVCxNQUVRO0FBQ04sWUFBUSxHQUFSLENBQVksZ0NBQVosRUFETTtHQUZSO0NBRGUsQ0FBakIiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKVxuLy8gdmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxuLy8gdmFyIFVzZXIgPSByZXF1aXJlKCcuL2luaXRpYXRpdmVNb2RlbCcpO1xuLy8gdmFyIEluaXRpYXRpdmUgPSByZXF1aXJlKCcuL3VzZXJNb2RlbCcpO1xuXG52YXIgYXBwID0gZXhwcmVzcygpO1xuYXBwLnVzZShwYXJzZXIuanNvbigpKTtcblxuXG4vLyB2YXIgZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xuLy8gZGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvcik7XG4vLyBkYi5vbmNlKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuXG4vLyB9KTtcblxuLy8gbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9pdm90ZScpO1xuXG5cbmFwcC5nZXQoJy8nLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2coXCJoZWxwbyFcIilcbiAgcmVzLnNlbmQoJ2dldCB3b3JrcycpO1xufSlcblxuYXBwLnBvc3QoJy8nLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2coJ2hlbHBwcHBwcCcpXG4gIHJlcy5zZW5kKCdwb3N0IHdvcmtzJyk7XG59KVxuLy8gZXhwb3J0cy5nZXRJbml0aWF0aXZlcyA9IGZ1bmN0aW9uIChyZXEsIHJlcykge1xuLy8gICBJbml0aWF0aXZlLmZpbmQoKS5leGVjKGZ1bmN0aW9uIChlcnIsIGluaXRpYXRpdmVzKSB7XG4vLyAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoaW5pdGlhdGl2ZXMpO1xuLy8gICB9KVxuLy8gfVxuXG4vLyBleHBvcnRzLnZvdGUgPSBmdW5jdGlvbiAocmVxLCByZXMpIHtcbi8vICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xuLy8gfVxuYXBwLmxpc3Rlbig4MDgwLCBmdW5jdGlvbihlcnIpIHtcbiAgaWYgKGVycikge1xuICAgIGNvbnNvbGUubG9nKFwiRVJST1IhISEhIVwiKVxuICB9IGVsc2UgIHtcbiAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgbGlzdGVuaW5nIG9uIHBvcnQgODA4MFwiKTtcbiAgICBcbiAgfVxufSk7XG4iXX0=