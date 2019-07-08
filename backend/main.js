var express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors');


// Create global app object
var app = express();


// Normal express config defaults
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(require('./routes'));
app.use(express.static(__dirname + '/public')); 



// finally, let's start our server...
var server = app.listen(3001, function () {
  console.log('Listening on port ' + server.address().port);
});