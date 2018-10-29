var x = document.getElementById("weatherInfo");

	function getLocation() {

    	if (navigator.geolocation) {
    	    navigator.geolocation.getCurrentPosition(getWeather);
    	} else { 
    	    x.innerHTML = "Geolocation is not supported by this browser.";
    	}
	}

	function getWeather(position) {
		var longitude = position.coords.longitude;
		var latitude = position.coords.latitude;
		fetch("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=4c03ce0b7b0c8b55220531dfed0f8c44&units=metric").then(resp => resp.json())
		.then(resp => {
				showWeather(resp);
		})
	}

	function showWeather(weather) {
		console.log("test");
		var content = document.getElementById("weatherInfo");
		content.innerHTML = '<div id="weatherDiv"><p class="weatherHeader">' + weather.name + '</p>'
		+ "<p>Current weather: " + weather.weather[0].main.toLowerCase() + "</p>"
		+ "<p>Temperature: " + weather.main.temp + " &#176;C</p>"
		+ "<p>Wind speed: " + weather.wind.speed + "</p>"
		+ "<p>Pressure: " + weather.main.pressure + "</p>"
		
		+ '</div>';
	}