import React from 'react';
import moment from 'moment';
import '../styles/components/Current.css';

export const Current = ({ current }) => {

	return (
		<div className="header-current">
			<div className="current-day"> 
				<picture> 
					<img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}.png`} alt="icon weather" />
				</picture>
				<h2 className="degrees">{Math.trunc(current.temp - 273.15) + "°C"}</h2>
			</div>
			<div>
				<p className="day-description">{current.weather[0].description}</p>
			</div>
				<p className="day-time">{moment.unix(current.dt).format('dddd, MMMM D, YYYY')}</p>
		</div>
	)

}