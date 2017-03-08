var express = require('express');
var app = express();

app.listen(8887, function() {
  console.log('Listening on port 8887');
})


var messages = ["hello there.", "I'm sorry, I cannot take any request at this time.", "i can tell you how to do that."];


function getRandomMessage(){
  const randomNumber = Math.floor(Math.random() * messages.length);
  return messages[randomNumber];
}

app.get('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: getRandomMessage()
  }));
});
