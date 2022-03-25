import React, { useContext } from 'react';

import { Current } from './Current';
import { Hourly } from './Hourly';
import { Daily } from './Daily';
import { Condition } from './Condition';
import { MyContext } from '../context/AppContext';
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
				<section>
					<article className="card-hours">
						<button className="scroll scroll-right" onClick={scrollLeft}>
							<img className="scroll-icon scroll-icon-left" src={require('../img/flecha-izquierda.png')}/>
						</button>
						<article className="hourly">
							<Hourly hourly={weatherApiInfo.hourly}/>
						</article>
						<button className="scroll scroll-left" onClick={scrollRight}>
							<img className="scroll-icon scroll-icon-right" src={require('../img/flecha-derecha.png')}/>
						</button>
					</article>
					<article className="daily-condition">
						<div>	
							<Daily daily={weatherApiInfo.daily} />
						</div>
						<div>
							<Condition conditions={weatherApiInfo.current} />
						</div>
					</article>
				</section>
			</div>
		</div>
	)

}