import {useState } from 'react';

export const WeatherApi = () => {
	const [weatherApiInfo, setWeatherApiInfo] = useState([]);

	const callWeatherApiData = async (location, navigate) => {

		let country = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=fb9ddfc409ad8f8ceafc068457007605`;

		let countryGeoLocation;

		try {
			countryGeoLocation = await (await fetch(country)).json();
		} catch (error) {
			alert(`Verificá escribir bien el nombre de tu pais`)
		}

		try {
			const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${countryGeoLocation[0].lat}&lon=${countryGeoLocation[0].lon}&appid=fb9ddfc409ad8f8ceafc068457007605`;
			await (await fetch(url)).json()
				.then(res => {
					if (Object.entries(res).length > 0) {
						setWeatherApiInfo(res);
						navigate('/weather');
					}
				})
		} catch (error) {
			alert(`Verificá escribir bien el nombre de tu pais`);
		}

	}

	return {
		callWeatherApiData,
		weatherApiInfo,
	}

}