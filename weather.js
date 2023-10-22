const apiKey = "900b55769ab21153d3c8564d50a8f6ad";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=bangalore";

document.addEventListener("DOMContentLoaded", function() {
  async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data); 

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  }

  checkWeather(); 
});

