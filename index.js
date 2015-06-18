var express = require('express');
var app = express();
var http = require('http');
server = http.createServer(app);
server.listen(process.env.PORT || 3000);
var bodyParser = require('body-parser');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get("/", function (req, res) {
	res.render('index');

});


var io = require('socket.io').listen(server);


io.sockets.on('connect', function (socket) {
	console.log('connected');
});



Instagram = require('instagram-node-lib')

Instagram.set('client_id', process.env.INSTAGRAM_CLIENT_ID);
Instagram.set('client_secret', process.env.INSTAGRAM_CLIENT_SECRET);

Instagram.set('callback_url', 'http://2577c883.ngrok.io/subscribe');

Instagram.tags.info({
  name: 'london',
  complete: function(data){
    console.log(data);
  }
});

app.get('/subscribe', function (req, res){
  Instagram.subscriptions.handshake(req, res); 
});

app.post('/subscribe', function (req, res){
	var data = req.body;
	io.sockets.emit('instagram', data);
	console.log(data);
});

Instagram.subscriptions.subscribe({ 
	object: 'tag',
  object_id: 'london',
  aspect: 'media',
  callback_url: 'http://2577c883.ngrok.io/subscribe',
  type: 'subscription',
  id: '#' 
});

Instagram.subscriptions.list()









