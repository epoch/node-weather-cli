var request = require('request');

request({
  url: 'http://api.openweathermap.org/data/2.5/weather',
  qs: {
    q: 'Melbourne',
    APPID: '887abc5435b6dd0f4dddb765427b5b41'
  }
}, function(error, response, body) {
  var output = JSON.parse(body)
  console.log("The weather for Melbourne is: " + output.weather[0].main + ", " + output.weather[0].description);
});
