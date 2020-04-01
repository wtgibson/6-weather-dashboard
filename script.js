var apiKey = "bd7df40c125eba6e663e93b94b66b391";
var city = "Danville";
var cities = [];
var searchHistory = [];
var latitude;
var longitude;
var forecastData;
var weatherData;
var uvData;
// var today = moment().format("dddd, MMMM Do");
var today = "2020-03-31"
// console.log(today);

var date;

var checkPrevious = JSON.parse(localStorage.getItem("searchHistory"));

if (checkPrevious !== null) {
	searchHistory = checkPrevious;
}

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

    showCurrentWeather(weatherData, uvData)
  });
 });
};

currentWeather(city);

function showCurrentWeather(weatherData, uvData) {

  var utcSeconds = weatherData.dt;
  var date = new Date(0);
  date.setUTCSeconds(utcSeconds);
  date = date.toLocaleDateString("en-US");

  var Fahrenheit = Math.round((weatherData.main.temp * 9) / 5 - 459.67);

  var uvColor;

  if (uvData  < 3) {
    uvColor = "bg-success";
  
  } else if (uvData > 7) {
    uvColor = "bg-danger";
  
  } else {
    uvColor = "bg-warning";

  }

  $("#currentCity").text(weatherData.name + " (" + date + ") ");
  $("#image").append('<img src="https://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png" alt="weather icon" width="60px" height="60px">');
	$("#temp").text("Temperature: " + Fahrenheit + " °F");
	$("#humid").text("Humidity: " + weatherData.main.humidity + " %");
	$("#wind").text("Wind Speed: " + weatherData.wind.speed + " MPH");
	$("#uv").html('UV Index: <span class="text-white rounded-sm ' + uvColor + ' p-2">' + uvData + "</span>");
};



function fiveDayForecast(city) {
  
  
  var forecastQuery = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;

  $.ajax({
    url: forecastQuery,
    method: "GET"
  }).then(function (response) {
    forecastData = response;
    console.log(forecastData)
    
    showForecast(forecastData)

  });
};

fiveDayForecast(city)

function showForecast(forecastData) {

  for (var i = 0; i < 5; i++) {
    console.log(i)

    var dataIndex = forecastData.list[i * 8 + 4];

    var utcSeconds = dataIndex.dt;
    var date = new Date(0);
    date.setUTCSeconds(utcSeconds);
    date = date.toLocaleDateString("en-US");

    var Fahrenheit = Math.round((dataIndex.main.temp * 9) / 5 - 459.67);

    var cardID = $("#" + i);
    cardID.html("<h4>" + date + "<h4>");
    cardID.append('<img src="https://openweathermap.org/img/wn/' + dataIndex.weather[0].icon + '@2x.png" alt="weather icon" width="50px" height="50px">');
    cardID.append("<p>Temp: " + Fahrenheit + " ℉</p>")
    cardID.append("<p>Humidity: " + dataIndex.main.humidity + " ℉</p>")

  };
};