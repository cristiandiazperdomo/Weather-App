import React from 'react';
import moment from 'moment';

import '../styles/components/Condition.css';

export const Condition = ({ conditions }) => {

	return ( 
		<div className="condition">
			<div className="card-condition">
				<img src={require('../img/icons-viento.png')} alt="wind"/>
				<div>
					<h4>{Math.round(conditions.wind_speed) + "km/h" }</h4>
					<p>Wind</p>
				</div>
			</div>
			<div className="card-condition">
				<img src={require('../img/icons-humidity.png')} alt="humidity"/>
				<div>
					<h4>{conditions.humidity}%</h4>
					<p>Humidity</p>
				</div>
			</div>
			<div className="card-condition">
				<img src={require('../img/icons-sun.png')} alt="uv index"/>
				<div>
					<h4>{conditions.uvi}</h4>
					<p>UV Index</p>
				</div>
			</div>
			<div className="card-condition">
				<img src={require('../img/icons8-sunrise.png')} alt="sunrise"/>
				<div>
					<h4>{moment.unix(conditions.sunrise).format('HH:mm')}</h4>
					<p>Sunrise</p>
				</div>
			</div>
			<div className="card-condition">
				<img src={require('../img/icons8-sunset.png')} alt="sunset"/>
				<div>
					<h4>{moment.unix(conditions.sunset).format('HH:mm')}</h4>
					<p>Sunset</p>
				</div>
			</div>
		</div>
	)
}