import React, { useState } from 'react';

export const WeatherApi = () => {
	const [ weatherApiInfo, setWeatherApiInfo ] = useState([]);
	const [ quality, setQuality ] = useState([]);

	const callWeatherApiData = async location => {
		let country = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=fb9ddfc409ad8f8ceafc068457007605`;

		let countryGeoLocation = await (await fetch(country)).json();

		let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${countryGeoLocation[0].lat}&lon=${countryGeoLocation[0].lon}&appid=fb9ddfc409ad8f8ceafc068457007605`;
		
		let weatherApiData = await (await fetch(url)).json();

		setWeatherApiInfo(weatherApiData);
	}

	return {
		callWeatherApiData, weatherApiInfo
	}
}