
var keys = require("./keys.js")

var comand = process.argv[2]
console.log(comand)

if (comand === `my-tweets`) {
    twitter()
}
else if (comand === `spotify-this-song`) {
    console.log(`spotify-this-song`)
}
else if (comand === `movie-this`) {
    console.log(`movie-this`)
}
else if (comand === `do-what-it-says`) {
    console.log(`do-what-it-says`)
}
else {
    console.log(`
    my-tweets

     spotify-this-song
    
     movie-this
    
    do-what-it-says
`)

}


function twitter() {
    var Twitter = require('twitter');
    var twitterkeys = keys.twitter
    var client = new Twitter(twitterkeys)
    var params = { screen_name: 'nodejs' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            tweets.map(function(tweet){
                console.log(tweet.text);
            })
           
        }
    });

    console.log()

}
function spotify() {

}
function movie() {

}
function dowhatitsays() {

}