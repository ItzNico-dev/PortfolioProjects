import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);

  const getWeather = () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherInfo({
          cityName: data.name,
          temp: data.main.temp,
          description: data.weather[0].description,
        });
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setWeatherInfo(null);
      });
  };

  return (
    <div className='container'>
      <h1>Weather App</h1>
      <input
        type='text'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder='Enter city name'
      />
      <button onClick={getWeather}>Get Weather</button>

      {weatherInfo && (
        <div id='weatherInfo'>
          <h2>{weatherInfo.cityName}</h2>
          <p>Temperature: {weatherInfo.temp}°C</p>
          <p>Description: {weatherInfo.description}</p>
        </div>
      )}

      {weatherInfo === null && (
        <p>Error fetching weather data. Please try again.</p>
      )}
    </div>
  );
}

export default WeatherApp;
