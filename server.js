var express = require('express');

//Create Our App

var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
	console.log('Express server is up on PORT 3000');
});