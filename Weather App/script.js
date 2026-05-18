const input = document.getElementById("cityInput");
const btn = document.getElementById("searchBtn");
const result = document.getElementById("result");

const API_KEY = "222b3364b051133901ecee40401b86ad";

console.log("JS connected");

async function getWeather(city) {
    try {
        result.innerHTML = "<p class='loading'>Loading...</p>";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        const temp = Math.round(data.main.temp);
        const condition = data.weather[0].main;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        changeBackground(condition);

        result.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${iconUrl}" alt="weather">
            <p class="temp">${temp}°C</p>
            <p class="condition">${condition}</p>
        `;

    } catch (error) {
        result.innerHTML = `<p class="error">${error.message}</p>`;
    }
}

function changeBackground(condition) {
    document.body.className = "";

    if (condition === "Clear") {
        document.body.classList.add("clear");
    } else if (condition === "Clouds") {
        document.body.classList.add("clouds");
    } else if (condition === "Rain" || condition === "Drizzle") {
        document.body.classList.add("rain");
    } else if (condition === "Snow") {
        document.body.classList.add("snow");
    } else {
        document.body.classList.add("default");
    }
}

// Button click
btn.addEventListener("click", () => {
    const city = input.value.trim();
    if (city) getWeather(city);
});

// ENTER key support
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        btn.click();
    }
});
