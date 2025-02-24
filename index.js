document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "9d9ce0ac97339ff7b19e1f20a7d8957d";
    const weatherForm = document.querySelector(".weatherForm");
    const cityInput = document.querySelector(".cityInput");
    const card = document.querySelector(".card");

    weatherForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    });

    async function fetchWeather(city) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            );
            const data = await response.json();
            if (response.ok) {
                displayWeather(data);
            } else {
                showError(data.message);
            }
        } catch (error) {
            showError("Failed to fetch data. Please try again.");
        }
    }

    function displayWeather(data) {
        const { name, main, weather } = data;
        card.innerHTML = `
            <h1 class="cityDisplay">${name}</h1>
            <p class="tempDisplay">${main.temp}°C</p>
            <p class="humidityDisplay">Humidity: ${main.humidity}%</p>
            <p class="descDisplay">${weather[0].description}</p>
            <p class="WeatherEmoji">${getWeatherEmoji(weather[0].main)}</p>
        `;
        card.style.display = "block";
    }

    function showError(message) {
        card.innerHTML = `<p class="errorDisplay">${message}</p>`;
        card.style.display = "block";
    }

    function getWeatherEmoji(condition) {
        const emojiMap = {
            Clear: "☀️",
            Clouds: "☁️",
            Rain: "🌧️",
            Drizzle: "🌦️",
            Thunderstorm: "⛈️",
            Snow: "❄️",
            Mist: "🌫️"
        };
        return emojiMap[condition] || "❓";
    }
});
