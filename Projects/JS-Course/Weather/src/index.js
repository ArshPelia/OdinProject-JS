console.log("Script Started")

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form').onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        geoCode();
    };
});

async function geoCode() {
    const loc = document.querySelector('#location').value;
    console.log("Calling Geocode API for: " + loc);
    try{
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${loc}&limit={2}&appid=2373a86cb8c375c78b4a4391d4343a58`, 
            {mode: 'cors'});
        const data = await response.json();
        console.log("Lat: " + data.lat)
        console.log("Lon: " + data.lon)
    }catch(error){
        console.error(error)
    }

}

console.log("Script Ended")
