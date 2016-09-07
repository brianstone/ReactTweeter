const express = require('express');
const app = express();
const twitter = require('./twitter');
var dotenv = require('dotenv');
dotenv.load();

app.get('/', function (req, res) {
	twitter.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
    res.json(tweets);
	});
});

app.listen(3001, function() {
	console.log('Example app listening on port 3001!');
});