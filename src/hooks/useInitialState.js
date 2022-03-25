import React, { useState } from 'react';
import { WeatherApi } from '../components/WeatherApiInfo';

export const useInitialState = () => {

		const [location, setLocation] = useState('');

		const {
			callWeatherApiData,
			weatherApiInfo
		} = WeatherApi();

		const onSubmit = async (e, navigate) => {
			e.preventDefault();
			await callWeatherApiData(location);
			navigate('/weather')
		}

		return {
			setLocation,
			onSubmit,
			weatherApiInfo
		}

}