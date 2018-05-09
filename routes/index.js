var express = require('express');
var jsonfile = require('jsonfile')
var pick = require('random-pick')


var router = express.Router();
var demoTweets = jsonfile.readFileSync('demoTweets.json')

var embedder = require('../embedder');
//Example
//getHTML(idTweet, callback)

embedder.getHTML("507185938620219395",function(html){
	console.log("____________HTML___________"+html);
});

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Dr.Watson',
		tag_title_description: 'The Fake News Inspector',
		description: 'An AI-based platform to check fake news on twitter via Watson IBM',
		demoTweets: pick(demoTweets, 3)
	});
});

module.exports = router;