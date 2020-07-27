getWeather(72701);
function getWeather(zipcode) {
    let request = new XMLHttpRequest();
   

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (request.status == 200) {
                let forecast = JSON.parse(request.responseText);
                console.log(forecast);
                let conditions = `${forecast.name} is currently ${forecast.weather[0].main}, and ${forecast.main.temp} degrees.`;
                {
                document.getElementById("weather-message").innerText = conditions;
            }
              {
                alert('There was an error');
            }
        }
    };

    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",US&units=imperial&appid=ccef2c8c80349829", true);
    request.send();
    }
}