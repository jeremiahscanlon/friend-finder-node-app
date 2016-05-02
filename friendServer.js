// Requires
var express = require('express');
var bodyParser = require('body-parser');

// Express Setup
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port

// Makes header requests easier fot the server to interpret
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Routing
app.get('/characters', function(req,res){
	res.sendFile(path.join(__dirname + '/characters.html'));
});

// Listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});