
// when page finishes loading ...
$(document).ready (function(){

	// random number generator between 1 and 3
	var number = Math.floor(Math.random() * 3) + 1;
	// use number randomly generated to switch between 3 friend finder background images
	$('.jumbotron').css({
		'background-image':'url(assets/images/'+number+'.jpg)',
	});

	// create an array with ten spots to be adjusted later
	var answers = [3,3,3,3,3,3,3,3,3,3];

	// upon click of any of the rating buttons
	$('#answers > button.answer').click(function(){
		// get the data-index value from the button
		var arrayIndex = $(this).data('index');
		// get the html text from the button
		var answer = +this.innerHTML
		// remove the "selected" class from any of the same button section
		$('button[data-index='+arrayIndex+']').removeClass('selcted');
		// add the "selected" class to the button that was chosen
		$(this).addClass('selcted');
		// change the value in the array for the answer by the data-index assigned to the button
		answers[arrayIndex] = answer;
	});

	// function to be used later to send the info captured to the api and show the modal pop-up with the response
	function postToApi(){
		// the url created in the express routing for the api
		var url = 'http://localhost:8070/api/friends';
		// jquery post request with the previously created "postObject", includes call back function with the data send from the server
		$.post(url, postObject, function(data){
			// add the name and image to the modal
			$('#modalBody').html('<p class="text-center">'+data.name+'</p>');
			$('#modalBody').append('<img class="center-block" src="'+data.photo+'" alt="'+data.name+'" style="max-width:100%">');
			// show the modal
			$('#myModal').modal('show');
		});
	};

	// upon click of the submit button
	$('#submit').click(function(){
		// capture the values from the name and imageURL fields.
		var name = $( '#name' ).val().trim();
		var imageURL = $( '#imageURL' ).val().trim();

		// down and dirty way to validate that the name and the image link have been given values.
		if(name){
			if(imageURL){
				// if both exist then create an object with captured data
				postObject = {
					name: name,
					photo: imageURL,
					scores: answers
				};
				// run the function to send to the api
				postToApi();

			} else {
				// if no imageURL then post reminder to enter it
				alert('Please enter an image URL.');
			};
			
		} else {
			// if no name then post reminder to enter it
			alert('Please enter your name.');
		};
	});
});