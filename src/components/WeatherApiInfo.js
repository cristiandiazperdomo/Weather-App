import {
	useState
} from 'react';

export const WeatherApi = () => {
	const [weatherApiInfo, setWeatherApiInfo] = useState([]);
	const [boolean, setBoolean] = useState(true);

	const callWeatherApiData = async location => {
		
		let country = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=fb9ddfc409ad8f8ceafc068457007605`;

		let countryGeoLocation;

		try {
			countryGeoLocation = await (await fetch(country)).json();
		} catch (error) {
			console.log(error);
			alert(`Verificá escribir bien el nombre de tu pais`)
		}

		let weatherApiData;
		try {
			const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${countryGeoLocation[0].lat}&lon=${countryGeoLocation[0].lon}&appid=fb9ddfc409ad8f8ceafc068457007605`;
			weatherApiData = await (await fetch(url)).json();
			setBoolean(true);
		} catch (error) {
			console.log(error);
			setBoolean(false);			
			//alert(`Verificá escribir bien el nombre de tu pais`);
		}

		setWeatherApiInfo(weatherApiData)
	}

	return {
		callWeatherApiData,
		weatherApiInfo,
		boolean,
	}

}