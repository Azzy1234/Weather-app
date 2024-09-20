document.getElementById('getWeather').onclick = function() {
    let city = document.getElementById('city').value.trim(); // this will get the city input and remove the extra spaces
    let apiKey = '0d587e20ae4c4c2f96c211028242009'; 
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Displays the weather information
            document.getElementById('weatherInfo').innerHTML = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c} °C</p>
                <p>Condition: ${data.current.condition.text}</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind Speed: ${data.current.wind_kph} km/h</p>
            `;
        })
        .catch(error => {
            // Displays an error if city is not found
            document.getElementById('weatherInfo').innerHTML = `<p>City not found or an error occurred.</p>`;
        });
};
