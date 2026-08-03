async function getWeather(){

    let city = document.getElementById("city").value;

    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=9809ad2540704e3688b181931260308&q=${city}&aqi=yes`);

    let data = await response.json();

    document.getElementById("name").innerHTML = data.location.name;
    document.getElementById("temp").innerHTML = "Temperature : " + data.current.temp_c + " °C";
    document.getElementById("condition").innerHTML = "Condition : " + data.current.condition.text;
    document.getElementById("humidity").innerHTML = "Humidity : " + data.current.humidity + "%";
    document.getElementById("wind").innerHTML = "Wind : " + data.current.wind_kph + " km/h";
}