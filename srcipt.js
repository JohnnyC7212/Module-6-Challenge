// Global variables
var weatherApiKey = '15a524eed6b280e71c8ef262f6aa6ce8'; // Replace with your actual API key
var weatherApiRootUrl = 'https://api.openweathermap.org/data/2.5';

// DOM element references
var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var todayContainer = document.querySelector('#today');
var forecastContainer = document.querySelector('#forecast');

// Function to fetch weather data from the OpenWeatherMap API
function fetchWeatherData(location) {
    var apiUrl = `${weatherApiRootUrl}/weather?q=${location}&units=imperial&appid=${weatherApiKey}`;

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Handle the data and update the DOM
            displayWeatherData(data);
        })
        .catch(function (error) {
            console.error('Error fetching weather data:', error);
        });
}

function fetchForecastData(location) {
    var apiUrl = `${weatherApiRootUrl}/weather?q=${location}&units=imperial&appid=${weatherApiKey}`;
}

// Function to display weather data on the webpage
function displayWeatherData(data) {
    // Extract data from the API response
    var cityName = data.name;
    var temperature = data.main.temp;
    var weatherDescription = data.weather[0].description;
    var weatherIconCode = data.weather[0].icon;

    // Create HTML elements to display the data
    var cityNameElement = document.createElement('h2');
    cityNameElement.textContent = cityName;

    var temperatureElement = document.createElement('p');
    temperatureElement.textContent = 'Temperature: ' + temperature + '°F';

    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = 'Description: ' + weatherDescription;

    //Creates HTML elements to display the data
    var cityNameElement = document.createElement('h2');
    var temperatureElement = document.createElement('p');
    temperatureElement.textContent = 'Temperature: ' + temperature + '°F';

    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = 'Description: ' + weatherDescription;

    // Create an image element for the weather icon
    var weatherIconElement = document.createElement('img');
    weatherIconElement.src = 'https://openweathermap.org/img/w/' + weatherIconCode + '.png';
    weatherIconElement.alt = 'Weather Icon';


    todayContainer.innerHTML = '';

    // Append elements to the DOM
    todayContainer.appendChild(cityNameElement);
    todayContainer.appendChild(temperatureElement);
    todayContainer.appendChild(descriptionElement);
    todayContainer.appendChild(weatherIconElement);
    forecastItemElement.ap
}


searchForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    var location = searchInput.value.trim();
    if (location) {
        fetchWeatherData(location);
    }
    searchInput.value = ''; 
});


