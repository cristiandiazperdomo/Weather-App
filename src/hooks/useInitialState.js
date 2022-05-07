import { useState } from 'react';
import { WeatherApi } from '../components/WeatherApiInfo';
import { AirQuality } from '../components/AirQuality';

export const useInitialState = () => {

	const [location, setLocation] = useState('');
	const [loader, setLoader] = useState(false);

	const {
		callWeatherApiData,
		weatherApiInfo,
		errorModal,
		setErrorModal,
	} = WeatherApi();

	const {
		air,
		quality,
	} = AirQuality();

	const onSubmit = async (e, navigate) => {
		setLoader(true)
		e.preventDefault();
		await air(location);
		await callWeatherApiData(location, navigate);
		setLoader(false);
	}

	return {
		setLocation,
		onSubmit,
		weatherApiInfo,
		quality,
		loader,
		errorModal,
		setErrorModal,
	}

}