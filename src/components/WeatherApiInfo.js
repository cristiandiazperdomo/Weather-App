import React, { useState } from 'react';

export const WeatherApi = () => {
	const [ weatherApiInfo, setWeatherApiInfo ] = useState([]);

	const callWeatherApiData = async location => {
		let country = `http://api.positionstack.com/v1/forward?access_key=9100cf397464b2d023a00a3fc8fcb431&query=${location}`;

		let countryInfo = await (await fetch(country)).json();

		let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${countryInfo.data[0].latitude}&lon=${countryInfo.data[0].longitude}&appid=fb9ddfc409ad8f8ceafc068457007605`;
		
		let weatherApiData = await (await fetch(url)).json();

		setWeatherApiInfo(weatherApiData);
	}

	return {
		callWeatherApiData, weatherApiInfo
	}
}