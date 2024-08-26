import React from "react";
// Importing weather icons from 'react-icons/wi' library for use in the component.
import { WiDaySunny, WiRain, WiCloudy } from "react-icons/wi";

const WeatherDetails = ({ data, unit, city }) => {
  // Destructures 'main', 'weather', and 'wind' from the 'data' object passed as a prop.
  const { main, weather, wind } = data;

  // Conversion functions
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

  // Determine the temperature unit
  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  // Convert temperatures based on unit
  const temp = unit === "metric" ? main.temp : toFahrenheit(main.temp);
  const tempMin =
    unit === "metric" ? main.temp_min : toFahrenheit(main.temp_min);
  const tempMax =
    unit === "metric" ? main.temp_max : toFahrenheit(main.temp_max);

  // Function to capitalize the first letter of city name
  const capitalizeCityName = (name) =>
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  // The 'weatherIcon' function returns a specific weather icon component based on the main weather condition ('Clear', 'Rain', 'Clouds') from the weather data. If the condition does not match any case, it defaults to a cloudy icon.
  const weatherIcon = () => {
    switch (weather[0].main) {
      case "Clear":
        return <WiDaySunny />;
      case "Rain":
        return <WiRain />;
      case "Clouds":
        return <WiCloudy />;
      default:
        return <WiCloudy />;
    }
  };
  //  Redering Current weather
  return (
    <>
      <h2>Current Weather</h2>
      <div className="current-div">
        <div className="current-weather-details">
          <h2>{capitalizeCityName(city)}</h2>{" "}
          {/* Display city name with first letter capitalized */}
          <div className="icon">{weatherIcon()}</div>{" "}
          {/* Display weather icon */}
          <p>
            Temperature: {temp.toFixed(1)}
            {temperatureUnit}
          </p>{" "}
          {/* Show current temperature */}
          <p>
            Min Temperature: {tempMin.toFixed(1)}
            {temperatureUnit}
          </p>{" "}
          {/* Show minimum temperature */}
          <p>
            Max Temperature: {tempMax.toFixed(1)}
            {temperatureUnit}
          </p>{" "}
          {/* Show maximum temperature */}
          <p>Humidity: {main.humidity}%</p> {/* Show humidity */}
          <p>
            Wind: {wind.speed} m/s, {wind.deg}°
          </p>{" "}
          {/* Show wind speed and direction */}
          <p>Description: {weather[0].description}</p>{" "}
          {/* Show weather description */}
        </div>
      </div>
    </>
  );
};

// Exporting the WeatherDetails
export default WeatherDetails;
