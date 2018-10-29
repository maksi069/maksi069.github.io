var x = document.getElementById("position");

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
		//fetch("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=4c03ce0b7b0c8b55220531dfed0f8c44").then(resp => resp.json())
		//.then(resp => {
	//			showWeather(resp);
	//	})
		var url = window.location.href;    
		if (url.indexOf('?') > -1){
 			url += '?lon=' + longitude + "&lat=" + latitude;
		}else{
			url += '?lon=' + longitude + "&lat=" + latitude; 
		}
		window.location.href = url;
	}

	function showWeather(weather) {
		console.log("test");
	}