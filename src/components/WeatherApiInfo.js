import {useState } from 'react';

export const WeatherApi = () => {
	const [weatherApiInfo, setWeatherApiInfo] = useState([]);
	const [errorModal, setErrorModal] = useState(false);

	const callWeatherApiData = async (location, navigate) => {

		let country = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=fb9ddfc409ad8f8ceafc068457007605`;

		let countryGeoLocation = await (await fetch(country)).json();

		try {
			const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${countryGeoLocation[0].lat}&lon=${countryGeoLocation[0].lon}&appid=fb9ddfc409ad8f8ceafc068457007605`;
			await (await fetch(url)).json()
				.then(res => {
					if (Object.entries(res).length > 0) {
						setWeatherApiInfo(res);
						setErrorModal(false);
						navigate('/weather');
					}
				})
		} catch (error) {
			setErrorModal(true);
			setTimeout(() => {
				setErrorModal(false)
			}, 5000);
		}

	}

	return {
		callWeatherApiData,
		weatherApiInfo,
		errorModal,
		setErrorModal,
	}

}