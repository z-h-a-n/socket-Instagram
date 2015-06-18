var socket = io('http://28a09bbc.ngrok.io');
var photos = [];

socket.on('connect', function() {
  console.log("connected");
});

socket.on('instagram', function(object) {
	// console.log(object);

	$.ajax ({
		url: 'https://api.instagram.com/v1/tags/' + object[0].object_id + '/media/recent?client_id=b6b83157bc4840a982cfcb7afe3d3863', 
		dataType: 'jsonp'
	}).done(function (response) {
		console.log(response);
		if(photos.indexOf(response.data[0].id) === -1) {
			$('#photo-container').prepend('<li class="animated slideInLeft"><img src="'+ response.data[0].images.thumbnail.url + '"></li>');
			photos.push(response.data[0].id);
		} else {
			console.log('duplicate');
		}
	})
});


