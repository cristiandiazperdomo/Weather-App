import React from 'react';
import moment from 'moment';

import '../styles/components/Hourly.css';

export const Hourly = ({ hourly }) => {

	hourly.length = 24;

	return (
		<>
			{hourly.map(hours => 
			<div className="card-hourly" key={hours.dt}>
				<header className="card-header">
					<img src={"http://openweathermap.org/img/wn/" + `${hours.weather[0].icon}` + ".png"} alt="" />
				</header>
				<article className="article-temp">
					<p className="hours-temp">{Math.trunc(hours.temp - 273.15 ) + "°C"}</p>
				</article>
				<footer>
					<p className="hours-time">{moment.unix(hours.dt).format('HH:mm ')}</p>
				</footer>
			</div>)}
		</>
	)
}