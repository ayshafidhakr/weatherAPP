# Weather App

## Overview
This Weather App allows users to search for weather conditions in any city. The application fetches real-time weather data using the OpenWeatherMap API and displays relevant details such as temperature, humidity, weather description, and an emoji representing the weather condition.

## Features
- Search for weather by city name
- Displays temperature in Celsius
- Shows humidity and weather description
- Provides a weather emoji based on conditions
- Error handling for invalid city names and network failures

## Technologies Used
- HTML
- CSS
- JavaScript (Vanilla JS)
- OpenWeatherMap API

## Setup Instructions
1. Clone the repository or download the files.
2. Open the `index.html` file in a browser.
3. Enter a city name and click "Get Weather" to fetch the weather details.

## File Structure
```
/weather-app
│── index.html   # Main HTML structure
│── styles.css   # CSS styling
│── index.js     # JavaScript functionality
│── README.md    # Project documentation
```

## API Key
This project uses the OpenWeatherMap API. Ensure that the `apiKey` in `index.js` is set correctly:
```javascript
const apiKey = "YOUR_API_KEY_HERE";
```
Replace `YOUR_API_KEY_HERE` with a valid API key from [OpenWeatherMap](https://openweathermap.org/).

## Usage
1. Open the app in a browser.
2. Enter a city name in the input field.
3. Click "Get Weather" to view the current weather details.

## License
This project is for educational purposes and is open-source.

---
Developed with ❤️

