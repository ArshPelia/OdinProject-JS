console.log("Script Started");

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form').onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        geoCode();
    };
});

async function geoCode() {
    const loc = document.querySelector('#location').value;
    console.log("Calling Geocode API for: " + loc);
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit=5&appid=2373a86cb8c375c78b4a4391d4343a58`, { mode: 'cors' });
        const data = await response.json();

        // Check if there are results
        if (data.length > 0) {
            getWeather(loc, data[0].lat, data[0].lon);
        } else {
            console.log("No results found");
        }
    } catch (error) {
        console.error(error);
    }
}

async function getWeather(loc, lat, lon) {
    console.log("Calling Weather API for: " + loc + " at: " + lat + lon );
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2373a86cb8c375c78b4a4391d4343a58`, { mode: 'cors' });
        const data = await response.json();

        console.log("Data: ", data);
        console.log("Timezone: ", data.timezone);
        console.log("Weather: " + data.weather[0].description)
    } catch (error) {
        console.error(error);
    }
}

console.log("Script Ended");
