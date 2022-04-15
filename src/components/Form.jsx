import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/components/Form.css';

export const Form = ({ onSubmit, setLocation }) => {
	
	const navigate = useNavigate()
	
	return (
		<form className="first-form" onSubmit={(e) => onSubmit(e, navigate)}>
			<header className="first-form-header">
				<img className="top-img" src={require('../img/icons8-weather-64.png')} alt="" />
			</header>
			<hr className="first-form-hr"/>
			<article className="first-form-article">
				<input type="text" placeholder="Ingresa aquí tu país o ciudad" className="first-form-article-input" onChange={e => setLocation(e.target.value)}/>
				<button className="first-form-article-button" type="submit">Enviar</button>
			</article>
			<hr className="first-form-hr"/>
			<footer className="first-form-footer">
				<p>Creado por Cristian Díaz</p>
			</footer>
		</form>
	)
}