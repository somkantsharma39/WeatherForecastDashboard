# Weather Forecast Application

This Weather Forecast Application is a single-page web app that allows users to view current weather details and a 5-day weather forecast for any city. The app uses the OpenWeatherMap API to fetch real-time weather data, providing an intuitive and responsive user interface built with ReactJS, HTML, CSS, and JavaScript.

## Features

- **Current Weather Information:** 
  - Enter a city name to view the current weather, including:
    - Current temperature
    - Minimum and maximum temperatures
    - Humidity
    - Wind speed and direction
    - Weather description (e.g., clear sky, light rain)
    - A weather icon reflecting the current conditions
  
- **5-Day Weather Forecast:**
  - View a 5-day weather forecast for the selected city, displaying:
    - Date
    - Average temperature
    - Weather description
    - Corresponding weather icon

- **Temperature Unit Toggle:**
  - Switch between Celsius and Fahrenheit units for all temperature readings.

- **Responsive Design:**
  - The application is fully responsive and optimized for both desktop and mobile devices.

- **Error Handling:**
  - Clear and informative error messages are displayed when users enter an invalid city name or encounter other issues.

## Technologies Used

- **ReactJS:** For building the user interface and managing the application state.
- **HTML5:** For structuring the content of the application.
- **CSS3:** For styling the application and ensuring a responsive design.
- **JavaScript (ES6+):** For implementing application logic and handling API interactions.
- **OpenWeatherMap API:** For fetching current weather data and 5-day forecasts.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/somkantsharma39/WeatherForecastDashboard.git
   cd WeatherForecastDashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```plaintext
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Enter the name of a city in the search bar to view the current weather and 5-day forecast.
- Use the toggle switch to change temperature units between Celsius and Fahrenheit.
- View weather icons and descriptions that accurately reflect the current and forecasted conditions.

## Project Structure

```plaintext
WeatherForecastDashboard/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── CurrentWeather.js
│   │   ├── Forecast.js
│   │   ├── Header.js
│   │   └── ...
│   ├── utils/
│   │   ├── api.js
│   │   ├── helpers.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .env
├── package.json
├── README.md
└── ...
```

## Deployment

This project is deployed on Vercel. You can view the live version here: [Vercel Link](https://weather-forecast-dashboard-zeta.vercel.app/)

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request with your changes. Contributions are always welcome!


## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/api) for providing the weather data.
- [ReactJS](https://reactjs.org/) for the powerful front-end library.

---

Thank you for using the Weather Forecast Application! If you have any questions or feedback, please feel free to reach out.
