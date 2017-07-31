var request = require('request');
var fs = require("fs")


request('http://api.openweathermap.org/data/2.5/weather?q=melbourne,Australia&units=metric&apikey=73159aeecb90012fa048a38a5e33b991', function(err, res, body) {
    var json = JSON.parse(body);
    console.log("City: " + json.name + "," + json.sys.country);
    console.log(json.weather[0].description)
    console.log("Current temperature: " + json.main.temp + " C")
    console.log("Lowest temperature: " + json.main.temp_min + " C");
    console.log("Heightest temperature: " + json.main.temp_max + " C");
    console.log("Humidity: " + json.main.humidity + "%")
});
