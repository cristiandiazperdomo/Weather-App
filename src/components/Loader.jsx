import React from 'react';
import '../styles/components/Loader.css';

export const Loader = () => {
	return (
		<div className="loader-container">
			<figure>
				<img src={require('../img/icons8-weather-64.png')} alt="" className="loader-icon"/>
			</figure>
		</div>
	)
} 