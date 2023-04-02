// get temperature , humidity, description, wind

function displayTemperature(response) {
  console.log(response);
  let roundTemp = Math.round(response.data.temperature.current);
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

function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-text-input");
  let cityName = searchCity.value;
  console.log(searchCity.value);
  //   let displayCityName = document.querySelector("#city");
  //   displayCityName.innerHTML = cityName;

  let apiKey = "331a83f170c6f2e4ef360t13b388b6bo";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

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
