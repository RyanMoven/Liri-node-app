 //write the code you need to grab the data
 //from keys.js. Then store the keys in a variable

// External js file retrival
 var userKeys = require("./keys.js");

//Twitter API CALL 
var Twitter = require('twitter');

 var client = new Twitter({
  consumer_key: 'lpNsE6mRRNYY0MiI3sqbBXLWg',// userKeys.twitterKeys.consumer_key,
  consumer_secret: '	thsBv2TXs2iU8LmgUtRnNrkdCGEGxFi0AKcKZavK8TBNLXoG1p', //userKeys.twitterKeys.consumer_secret,
  access_token_key: '951307889205014529-r8aDUrdgCqGqqhiagvfX9chlw2lWEce', //userKeys.twitterKeys.access_token_key,
  access_token_secret: 'D4JapbgLkJlAxNjTMVE8E3KvmO1SgEFD4vPqz7SMkTTyW' //userKeys.twitterKeys.access_token_secret
});

client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
});

// SPOTIFY API CALL
Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: userKeys.spotifyKeys.id,
  secret: userKeys.spotifyKeys.secret
});
 
function songName() { spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
console.log(data.name);
console.log(data.album.name);
console.log(data);

  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
};
 var action = process.argv[2];

// We will then create a switch-case statement (if-then would also work).
// The switch-case will direct which function gets run.
switch (action) {
  case "spotify-this-song":
    songName();
    break;

  /* case "my-tweets":
    myTweets();
    break;

  case "movie-this":
    moviesThis();
    break;

  case "do-what-it-says":
    doWhat();
    break;
    */
}
