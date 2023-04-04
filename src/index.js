// get temperature , humidity, description, wind

function displayTemperature(response) {
  console.log(response);

  celsiusTemperature = response.data.temperature.current;
  console.log(celsiusTemperature);

  let roundTemp = Math.round(celsiusTemperature);
  let humidity = response.data.temperature.humidity;
  let wind = Math.round(response.data.wind.speed);
  let description = response.data.condition.description;
  let icon = response.data.condition.icon;
  let cityName = response.data.city;
  //   console.log(response.data.condition.icon);

  let displayCity = document.querySelector("#cityName");
  displayCity.innerHTML = cityName;

  let temp = document.querySelector("#temperature");
  temp.innerHTML = roundTemp;

  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = humidity;

  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = wind;

  let displayDescription = document.querySelector("#description");
  displayDescription.innerHTML = description;

  let displayIcon = document.querySelector("#icon");
  displayIcon.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`
  );
}

// search function and get api weather

function search(city) {
  let apiKey = "331a83f170c6f2e4ef360t13b388b6bo";
  //   let city = "chicago";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-text-input");
  search(searchCity.value);

  //   console.log(searchCity.value);
}

// convert fahrenheit

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("New York");

// get current date and time

let currentTime = new Date();

let displayCurrentTime = document.querySelector("#current-date-time");
displayCurrentTime.innerHTML = formatDate(currentTime);

function formatDate(date) {
  let hour = currentTime.getHours();
  if (hour < 10) {
    hour = 0`${hour}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hour}:${minutes}`;
}
