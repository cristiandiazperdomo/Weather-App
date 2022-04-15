import React from 'react';
import { Particle } from './Particle';
import '../styles/components/Particles.css'

export const Particles = ({ iaqi }) => {

	const particles = (particle) => {
		return [
			iaqi ? 
				{
					"asd": iaqi[particle] ? iaqi[particle].v : "-",
				}
			:
			{
				"asd": "-"
			}

		]
	} 
		

	const getPm25Color = pm25 => {
		if (pm25 < 51) {
			return 'green';
		} else if (pm25 < 101) {
			return 'yellow';
		} else if (pm25 < 151) {
			return 'orange';
		} else if (pm25 < 201) {
			return 'red';
		} else if (pm25 < 301) {
			return 'magenta';
		} else if (pm25 === '-') {
			return 'grey';
		}
	}

	const getPm10Color = pm10 => {
		if (pm10 < 40) {
			return 'green';
		} else if (pm10 < 80) {
			return 'yellow';
		} else if (pm10 < 120) {
			return 'orange';
		} else if (pm10 < 300) {
			return 'red';
		} else if (pm10 >= 300) {
			return 'magenta';
		} else if (pm10 === '-') {
			return 'grey';
		}
	}

	const getCoColor = co => {
		if (co < 9) {
			return 'green';
		} else if (co < 10) {
			return 'yellow';
		} else if (co >= 10) {
			return 'orange';
		} else if (co === '-') {
			return 'grey';
		}
	}

	return (
		<div className="particles">
		    <Particle
		    	Particle="pm25"
		    	value={particles('pm25')[0].asd}
		    	color={getPm25Color(particles('pm25')[0].asd)}
		    /> 
			<Particle
				Particle="pm10"
				value={particles('pm10')[0].asd}
				color={getPm10Color(particles('pm10')[0].asd)}
			/>
			<Particle
		        Particle="no2"
		        value={particles('no2')[0].asd}
		        color={getPm25Color(particles('no2')[0].asd)}
		    />
		    <Particle
		        Particle="O3"
		        value={particles('o3')[0].asd}
		        color={getPm25Color(particles('o3')[0].asd)}
		    />
			<Particle
			    Particle="CO"
			    value={particles('co')[0].asd}
			    color={getCoColor(particles('co')[0].asd)}
			/>
	    </div>	
	)
} 