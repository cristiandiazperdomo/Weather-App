import React from 'react';
import { Input } from './Input';
import { useNavigate } from 'react-router-dom';

import '../styles/components/Form.css';

export const Form = ({ onSubmit, setLocation }) => {
	
	const navigate = useNavigate()

	return (
		<form className="first-form" onSubmit={(e) => onSubmit(e, navigate)}>
			<header className="first-form-header">
				<img className="top-img" src={require('../img/icons8-weather-64.png')} alt="icon-weather" />
			</header>
			<hr className="first-form-hr"/>
			<article className="first-form-article">
				<Input setLocation={setLocation} className={'first-form-article-input input-home-check'}/>
				<button className="first-form-article-button" type="submit">Enviar</button>
			</article>
			<hr className="first-form-hr"/>
			<footer className="first-form-footer">
				<p>Creado por Cristian Díaz</p>
			</footer>
		</form>
	)
}