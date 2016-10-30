const express = require('express');
const app = express();
const twitter = require('./twitter');
const cors = require('cors');

app.use(cors());

app.use('/api', function (req, res) {
	console.log(req.query)
	twitter.get('search/tweets', {q: 'node.js'/*req.query*/}, function(error, tweets, response) {
    res.json(tweets);
	});
});
// /api?{}

app.listen(3001, function() {
	console.log('Example app listening on port 3001!');
  console.log('CORS-enabled web server listening on port 3001');
});
