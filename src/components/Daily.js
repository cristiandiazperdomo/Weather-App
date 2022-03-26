import React from 'react';
import moment from 'moment';

import '../styles/components/Daily.css';

export const Daily = ({ daily }) => {

	daily.length = 6;


	return (
	<>
	{daily.map(day => 
		<div className="daily-card" key={day.dt}>
			<div className="left-side">
				<div className="day-icon">
					<img src={"http://openweathermap.org/img/wn/" + `${day.weather[0].icon}` + ".png"} alt="" />
				</div>
				<div className="close-data">
					<h4>{moment.unix(day.dt).format('dddd')}</h4>	
					<p>{Math.trunc(day.temp.day - 273.15 ) + "°C"}</p>	
				</div>
			</div>
			<div className="right-side">
				<p>{Math.trunc(day.temp.min - 273.15 ) + "°C"}</p>
				<p>{Math.trunc(day.temp.max - 273.15 ) + "°C"}</p>
			</div>
		</div>)
	}
	</>
	)

}