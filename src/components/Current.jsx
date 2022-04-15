import React from 'react';
import moment from 'moment';
import '../styles/components/Current.css'

export const Current = ({ current }) => {

	let icon_Weather = "https://openweathermap.org/img/wn/" + `${current.weather[0].icon}` + ".png";

	return (
		<div className="header-current">
			<div className="current-day"> 
				<picture>
					<img src={icon_Weather} alt="" />
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