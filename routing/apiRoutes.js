console.log('apiRoutes Connected');
// require the file that will store the array of objects
var friendData = require('../data/friends.js');

// Routing
module.exports = function(app){

	// API GET Requests
	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});

	// API POST Requests
	app.post('/api/friends', function(req, res){
		tableData.push(req.body);
		res.json(true); // respond with confirmation that data was added successfully
	});

}