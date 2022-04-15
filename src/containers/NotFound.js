import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/NotFound.css';

export const NotFound = () => {

	return (
		<div className="NotFound">
			<img src={require('../img/404error.png')}/>
			<Link to="/">
				<button type="button">Come to the main page</button>
			</Link>
		</div>
	)

}