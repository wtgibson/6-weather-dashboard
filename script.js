var apiKey = "bd7df40c125eba6e663e93b94b66b391";
var city = "Danville";
var cities = [];
var latitude;
var longitude;
var forecastData;
var weatherData;
var uvData;
// var today = moment().format("dddd, MMMM Do");
var today = "2020-03-31"
console.log(today);

function currentWeather(city) {
  var currentWeatherQuery = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
  
  $.ajax({
    url: currentWeatherQuery,
    method: "GET"
  }).then(function (response) {
    weatherData = response;
    console.log(weatherData)

    var currentUVQuery = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + weatherData.coord.lat + "&lon=" + weatherData.coord.lon;

    $.ajax({
      url: currentUVQuery,
      method: "GET"
    }).then(function (response) {
      uvData = response.value;
      // Render data to page
      console.log(uvData)
    });


  });

};

currentWeather(city);
