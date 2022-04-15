import React, { useState } from 'react';
import { WeatherApi } from '../components/WeatherApiInfo';
import { AirQuality } from '../components/AirQuality';

export const useInitialState = () => {

		const [location, setLocation] = useState('');
		const [ loader, setLoader ] = useState(false);

		const { callWeatherApiData, weatherApiInfo } = WeatherApi();

		const { air, quality } = AirQuality();

		const onSubmit = async (e, navigate) => {
			setLoader(true)
			e.preventDefault();
			await callWeatherApiData(location);
			await air(location);
	
			navigate('/weather')
			setLoader(false)
		}

		return {
			setLocation,
			onSubmit,
			weatherApiInfo,
			quality,
			loader
		}

}