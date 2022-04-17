import React, { useContext } from 'react';
import {Chart, ArcElement} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { MyContext } from '../context/AppContext';
import { Particles } from './Particles';
import '../styles/components/AirQuality.css'

Chart.register(ArcElement);

const options = {
	cutout: "85%",
  	plugins: {
    	title: {
    	display: true,
    	text: 'Doughnut Chart',
    	color: 'blue',
    	font: {
	    	size: 34
      },
    }
  }
}

const qualityDescription = aqi => {
	if(aqi < 51 ) {
		return ["Buena", "La calidad del aire es satisfactoria y la contaminación del aire presenta poco o ningún riesgo."];
	} else if (aqi < 101){
		return ["Moderada", "La calidad del aire es aceptable, puede haber un riesgo para aquellos que son sensibles a la contaminación del aire."];
	} else if (aqi < 151){
		return ["Dañina a la salud para grupos sensibles", "Los miembros de grupos sensibles pueden experimentar efectos en la salud"];
	} else if (aqi < 201){
		return ["Dañina a la salud", "Los miembros de grupos sensibles pueden experimentar efectos en la salud"];
	} else if (aqi < 301){
		return ["Muy dañina a la salud", "Alerta sanitaria: Aumenta el riesgo de efectos en la salud para todos"];
	} else if (!aqi){
		return ["Informacion no disponible", "El índice de calidad del aire para esta ciudad no está disponible en este momento"];
	} 
}

export const AirQualityDisplay = () => {
	const { quality } = useContext(MyContext)

	let aqi = quality.airData.data.aqi;

	const data = {
	    datasets: [
	      {
	        data: [1, 1, 1, 1, 1, 1],
	        backgroundColor: [
	        	"white",
	        	qualityDescription(aqi)[0] === "Buena" ? 'green' : 'white', 
	        	qualityDescription(aqi)[0] === "Moderada" ? 'yellow' : 'white',
	        	qualityDescription(aqi)[0] === "Informacion no disponible" ? 'gray' : 'white',  
	        	qualityDescription(aqi)[0] === "Dañina a la salud para grupos sensibles" ? 'orange' : 'white', 
	        	qualityDescription(aqi)[0] === "Dañina a la salud" ? 'red' : 'white', 
	        	qualityDescription(aqi)[0] === "Muy dañina a la salud" ? 'purple' : 'white', 
	        ],
	        borderWidth: 0,
	        rotation: 150,
	      },
	    ],
	}
	
	return (
		<div className="AirQuality">
			<div className="AirQuality-top">
				<div className="AirQuality-top-left">		
					<Doughnut options={options} data={data}/>		
					{quality.airData.data.iaqi && <div className="inside-doughnut">
						<p>{aqi}</p>
						<p>AQI</p>
					</div>}
				</div>
				<div className="AirQuality-top-right">
					<div className="AirQuality-title">				
						<h4>{qualityDescription(aqi)[0]}</h4>
					</div>
					<div className="AirQuality-description">				
						<p>{qualityDescription(aqi)[1]}</p>
					</div>
				</div>
			</div>
			<div className="AirQuality-bottom">
				<Particles iaqi={quality.airData.data.iaqi} />
			</div>
		</div>
	)

} 