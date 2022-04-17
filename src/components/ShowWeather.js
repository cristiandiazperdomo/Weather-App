import React, { useContext } from 'react';

import { Current } from './Current';
import { Hourly } from './Hourly';
import { Daily } from './Daily';
import { Condition } from './Condition';
import { MyContext } from '../context/AppContext';
import { AirQualityDisplay } from '../components/AirQualityDisplay';


import '../styles/components/ShowWeather.css';

export const ShowWeather = () => {

	const { weatherApiInfo } = useContext(MyContext);

	const scrollRight = () => {
		if (document.querySelector(".hourly")) {
			const hourly = document.querySelector(".hourly");
			hourly.scrollLeft += 450;
		}
	};

	const scrollLeft = () => {
		if (document.querySelector(".hourly")) {
			const hourly = document.querySelector(".hourly");
			hourly.scrollLeft -= 450;
		}
	};

	return (
		<div className="big-card">
			<div className="big-card-container">
				<header className="big-card-header">
					<Current current={weatherApiInfo.current} />
				</header>
				<section className="hours-card-section">
					<div className="hours-card-div">
						<article className="card-hours">
							<button className="scroll scroll-right" onClick={scrollLeft}>
								<img className="scroll-icon scroll-icon-left" src={require('../img/flecha-izquierda.png')} alt="icon-scroll-left"/>
							</button>
							<article className="hourly">
								<Hourly hourly={weatherApiInfo.hourly}/>
							</article>
							<button className="scroll scroll-left" onClick={scrollRight}>
								<img className="scroll-icon scroll-icon-right" src={require('../img/flecha-derecha.png')} alt="icon-scroll-right"/>
							</button>
						</article>
						<article className="daily-condition">
							<div className="daily-container">	
								<Daily daily={weatherApiInfo.daily} />
							</div>
							<div className="condition-container">
								<Condition conditions={weatherApiInfo.current} />
								<div className="AirQuality-container">
									<AirQualityDisplay />
								</div>
							</div>
						</article>
					</div>
				</section>
			</div>
		</div>
	)

}