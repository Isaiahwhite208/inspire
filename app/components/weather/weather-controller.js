import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(res) {
	let tempF = (res.data.main.temp * 9 / 5) - 459.67
	document.getElementById('weather').innerHTML =
		`
	<div class="weather-tab">
	<p>Boise</p>
	<p>${Math.round(tempF)} &#176F</p>
	</div>
	`
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			drawWeather(weather);
			//What can you do with this weather object?
		})
	}
}
