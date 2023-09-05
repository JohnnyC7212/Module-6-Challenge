// Define a function to fetch weather data from the OpenWeatherMap API
function fetchWeatherData(city) {
    var apiKey = '15a524eed6b280e71c8ef262f6aa6ce8'; // Replace with your actual API key
    var apiUrl = 'https://api.openweathermap.org';
    
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Handle the weather data and update the HTML
            displayWeatherData(data);
        })
        .catch(function (error) {
            console.error('Error fetching weather data:', error);
        });
}

// Define a function to display weather data on the webpage
function displayWeatherIcon(iconCode) {
    var iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

    var iconElement = document.createElement('img');
    inconElement.src = iconUrl;

    var weatherDisplay = document.getElementById('weather-display');
    weatherDisplay.appendChild(iconElement);
    // Extract data from the API response and update the HTML
    // Create and update elements in the #weather-display div
}

function displayWeatherData(data) {

}
// Add an event listener to the form for handling user input
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var city = document.querySelector('input[name="query"]').value;
    fetchWeatherData(city);
});

  