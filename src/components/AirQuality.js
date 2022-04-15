import React, { useState } from 'react';

export const AirQuality = () => {
	const [quality, setQuality] = useState([]);

	const air = async location => {

		location = location.split(' ').join("")

		let url = `https://api.waqi.info/feed/${location}/?token=2cea00b423221c328c5098449e0fd3a1d5e07388`;

		const airData = await (await fetch(url)).json();

		setQuality({
			airData
		});

	}

	return {
		air,
		quality
	}

}