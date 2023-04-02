// get temperature , humidity, description, wind

function displayTemperature(response) {
  console.log(response);
  let roundTemp = Math.round(response.data.temperature.current);
  let humidity = response.data.temperature.humidity;
  let wind = Math.round(response.data.wind.speed);
  let description = response.data.condition.description;

  let temp = document.querySelector("#temperature");
  temp.innerHTML = roundTemp;

  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = humidity;

  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = wind;

  let displayDescription = document.querySelector("#description");
  displayDescription.innerHTML = description;
}

let apiKey = "331a83f170c6f2e4ef360t13b388b6bo";
let cityName = "new york";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

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
