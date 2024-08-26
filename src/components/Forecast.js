import React from "react";
// Importing weather icons from 'react-icons/wi' library for use in the component.
import { WiDaySunny, WiRain, WiCloudy } from "react-icons/wi";

// Function to convert temperature from Celsius to Fahrenheit
const celsiusToFahrenheit = (temp) => (temp * 9) / 5 + 32;

// Function to convert temperature from Fahrenheit to Celsius
const fahrenheitToCelsius = (temp) => ((temp - 32) * 5) / 9;

const Forecast = ({ data, unit }) => {
  // Destructures 'list' from the 'data' prop
  const { list } = data;
  // Sets temperature unit symbol based on 'unit' prop ('°C' for metric, '°F' for imperial)
  const temperatureUnit = unit === "metric" ? "°C" : "°F";
  // Returns appropriate weather icon based on the weather description
  const weatherIcon = (description) => {
    switch (description) {
      case "clear sky":
        return <WiDaySunny />;
      case "rain":
        return <WiRain />;
      case "clouds":
        return <WiCloudy />;
      default:
        return <WiCloudy />;
    }
  };

  // Function to get temperature in the desired unit
  const convertTemperature = (temp) => {
    if (unit === "metric") {
      return temp; // Celsius
    } else {
      return celsiusToFahrenheit(temp); // Fahrenheit
    }
  };

  // Assuming 12:00 PM for daily forecast
  const dailyForecast = list.filter((item) => item.dt_txt.includes("12:00:00"));

  return (
    <>
      {/* Displays the 5-day weather forecast */}
      <h2 className="five-days">5-Day Forecast</h2>
      <div className="forecast">
        {dailyForecast.map((day) => (
          <div key={day.dt} className="forecast-day">
            {/* Displays weather icon based on the weather description */}
            <div className="icon">
              {weatherIcon(day.weather[0].description)}
            </div>
            {/* Formats and displays the date */}
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            {/* Displays average temperature with the correct unit */}
            <p>
              Average Temp: {convertTemperature(day.main.temp).toFixed(1)}
              {temperatureUnit}
            </p>
            {/* Displays weather description */}
            <p>Description: {day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

// Exporting the Forecast
export default Forecast;
