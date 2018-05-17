var Twitter = require('twitter');
var client = new Twitter({
	consumer_key: '',
	consumer_secret: '',
	bearer_token: ''
});

module.exports = {
	getHTML: function(id,externalCallback) {
		client.get('statuses/oembed',{url: 'https://twitter.com/Interior/status/507185938620219395'}, function(error, response, raw) {
			if(error) throw error;
			//console.log(response);
			externalCallback(response["html"]);
		});
	}	
}