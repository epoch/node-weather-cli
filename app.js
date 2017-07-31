var request = require('request');

// var url = 'http://samples.openweathermap.org/data/2.5/weather?q=Melbourne,au&appid=b1b15e88fa797225412429c1c50c122a1'

var url = 'http://api.openweathermap.org/data/2.5/weather'

// 747167a17967665090418a95009bdd53

request({
  uri: url,
  qs: { q: 'melbourne,au', appid: '747167a17967665090418a95009bdd53' }
}, function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', JSON.parse(body)); 
  var body = JSON.parse(body);
  console.log(body.main.temp)
});