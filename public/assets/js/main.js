$(document).ready (function(){
	
	console.log('main.js attached.');

	var number = Math.floor(Math.random() * 3) + 1;
	$('.jumbotron').css({
		'background-image':'url(assets/images/'+number+'.jpg)',
	});

	var answers = [1,2,3,4,5,6,7,8,9,10]
	$('#answers > button.answer').click(function(){
		var arrayIndex = $(this).data('index');
		var answer = +this.innerHTML
		$('button[data-index='+arrayIndex+']').removeClass('selcted');
		$(this).addClass('selcted');
		//console.log(arrayIndex + ' : ' + answer);
		answers[arrayIndex] = answer;
		//console.log(answers)
	});

	function postToApi(){
		var url = 'http://localhost:8070/api/friends';
		$.ajax({url: url, method: 'POST', data: postObject});
	};

	$('#submit').click(function(){
		var name = $( '#name' ).val().trim();
		var imageURL = $( '#imageURL' ).val().trim();

		postObject = {
			name: name,
			photo: imageURL,
			scores: answers
		};

		console.log(postObject);

		postToApi();

	});
});