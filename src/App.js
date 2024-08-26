// Importing the React library and the useState hook from the 'react' package
import React, { useState } from "react";
// Imporitng Axios library
import axios from "axios";
// Importing components Weather details and Forecast file
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
// Importing App for styling
import "./App.css";

const App = () => {
  // Declares a state variable 'city','weatherData','forecastData','unit','error' & 'displayedCity' with its initial value
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState("metric"); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [error, setError] = useState("");
  const [displayedCity, setDisplayedCity] = useState(""); // State to store the city name

  const fetchWeather = async () => {
    try {
      // Clear any previous errors
      setError("");
      // Fetch current weather data from the API based on the city and unit (Celsius/Fahrenheit)
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=f00c38e0279b7bc85480c3fe775d518c`
      );
      // Fetch 5-day weather forecast data from the API
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=f00c38e0279b7bc85480c3fe775d518c`
      );
      // Update state with the fetched weather and forecast data
      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setDisplayedCity(city); // Update displayed city
    } catch (err) {
      // Display an error message if the city is not found
      setError("City not found");
      setWeatherData(null); // Clear weather data
      setForecastData(null); // Clear forecast data
    }
  };

  // Toggles the temperature unit between Celsius (metric) and Fahrenheit (imperial).
  const handleUnitToggle = () => {
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

  // Triggers weather fetch when the Enter key is pressed.
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <>
      <div className="App">
        <div className="header">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)} // Update 'city' state on input change
            onKeyDown={handleKeyPress} // Trigger 'handleKeyPress' when a key is pressed
            placeholder="Enter city name"
          />
          <button onClick={fetchWeather}>Get Weather</button>{" "}
          {/*Button to fetch weather data*/}
          <button onClick={handleUnitToggle}>
            {unit === "metric" ? "Fahrenheit" : "Celsius"}{" "}
            {/* Toggle between Celsius and Fahrenheit */}
          </button>
        </div>
        <div className="main-content">
          {error && <p className="error">{error}</p>}{" "}
          {/* Display error message if any */}
          {weatherData && (
            <WeatherDetails
              data={weatherData}
              unit={unit}
              city={displayedCity}
            />
          )}
          {forecastData && <Forecast data={forecastData} unit={unit} />}{" "}
          {/* Pass forecast data to Forecast component */}
        </div>
      </div>
    </>
  );
};
//  Exporting the App
export default App;
