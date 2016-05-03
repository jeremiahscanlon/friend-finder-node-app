// require the file that will store the array of objects
var friendData = require('../data/friends.js');

// function to easily find the max of an array
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
};

// Routing
module.exports = function(app){

	// API GET Requests
	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});

	// API POST Requests
	app.post('/api/friends', function(req, res){
		
		// add the submitted data to the friend data array
		friendData.push(req.body);

		// create array to store the differences
		var differences = [];
		
		// create a for loop to go through each of the friends (minus one to not include newly added current user)
		for (var i = 0; i < (friendData.length)-1; i++) {
			// create a variable to hold the differences for each friend
			var friendDifference = [];
			// create a variable short cut directly to each friends scores
			var eachFriend = friendData[i].scores;
			// create a for loop to got through those scores and get a difference from the submitted scores
			for (var j = 0; j < eachFriend.length; j++) {
				// calculate the absolute value of the difference at each index
				var difference = Math.abs(eachFriend[j] - req.body.scores[j]);
				// send the values to an array
				friendDifference.push(difference);
			};
			// loop through the newly created friendDifference array and calculate over all difference
			var totalDifference = 0;
			for (var k = 0; k < friendDifference.length; k++) {
				totalDifference = totalDifference + friendDifference[k];
			};
			// send that overall difference to the differences with a matching index
			differences.push(totalDifference);
		};
		// get the number of minimum differences
		var min = getMinOfArray(differences);
		// get the index of the minimum differences in the Array
		var id = differences.indexOf(min);

		// response with the json data for the closest friend.
		res.json(friendData[id]);
	});

	

};