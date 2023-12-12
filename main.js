const apiKey = "900b55769ab21153d3c8564d50a8f6ad";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=&units=imperial&q=";

document.addEventListener("DOMContentLoaded", function() {
  const searchBox = document.querySelector(".search input");
  const searchButton = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon");
  const errorDisplay = document.querySelector(".error");

  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (response.status === 404) {
      errorDisplay.style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      errorDisplay.style.display = "none";
      document.querySelector(".weather").style.display = "block";

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
      } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "images/snow.png";
      }
    }
  }
  
  searchButton.addEventListener("click", () => {
    weatherIcon.src = "";
    checkWeather(searchBox.value); 
  });

  searchBox.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
      weatherIcon.src = "";
      checkWeather(searchBox.value);
    }
  });
});
