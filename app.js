var request = require('request');
// var fs = require('fs')

// var url = 'http://samples.openweathermap.org/data/2.5/weather?q=Melbourne,au&appid=b1b15e88fa797225412429c1c50c122a1'


var url = 'http://api.openweathermap.org/data/2.5/weather'

// 747167a17967665090418a95009bdd53

request({
  uri: url,
  qs: {
    q: 'melbourne, Australia',
    appid: 'cff1b13ee436991f301f5359f70e7185'
  }
}, function (error, response, body) {
    // if (err) {
    //   console.log(err);
    // } else {
    //   console.log(res);
    // }
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', JSON.parse(body));
  var outcome = JSON.parse(body);
  console.log("Melbourne: " + outcome.weather[0].main + ", " + outcome.weather[0].description);
  console.log("How cloudy is Melbourne? " + outcome.clouds.all + " %");
});
