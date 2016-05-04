// Requires and Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Express Setup
var app = express();
var PORT = process.env.PORT || 80; // Sets an initial port

// Makes header requests easier fot the server to interpret
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Routing
var staticContentFolder = __dirname + '/public';
app.use(express.static(staticContentFolder));
require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

// Listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});