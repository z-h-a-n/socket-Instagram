var socket = io('http://2577c883.ngrok.io');

socket.on('connect', function() {
  console.log("connected");
});

socket.on('instagram', function(gram) {
	console.log(gram);

	// var template = $('.')
})

// socket.on('statuses', function(status) {
//     var template = $('#tweet-template').html();
//     Mustache.parse(template);
//     var rendered = Mustache.render(template, status);
//     $('#tweet-container').prepend(rendered);
//   });

$.ajax({
     url: 'https://api.instagram.com/v1/tags/' + obj[0].object_id +'/media/recent?client_id=' + 'b6b83157bc4840a982cfcb7afe3d3863',
     crossdomain: true,
     dataType: 'json'
   }).done(function(data) {
   		console.log(data);
   })