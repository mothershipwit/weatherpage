getWeather(72701);

function getWeather(zipcode) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (request.status == 200) {
                let forecast = JSON.parse(request.responseText);
                console.log(forecast);
                let conditions = forecast.name + " is currently " + forecast.weather[0].main + ", and " + forecast.main.temp + " degrees.";
                console.log(conditions);
                document.getElementById("weather-message").innerText = conditions;
            }
            else {
                alert('There was an error');
            }
        }
    };

    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "ccef2c8c8034982955bec1e0b2a83e36", true);
    request.send();
}