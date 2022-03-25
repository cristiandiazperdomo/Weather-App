import React, { useState, useContext }  from 'react';
import { Form } from '../components/Form';
import { MyContext } from '../context/AppContext';

import '../styles/components/Home.css';

export const Home = () => {

	const { onSubmit, setLocation } = useContext(MyContext);

	return (
		<div className="container-form">
			<Form onSubmit={onSubmit} setLocation={setLocation}/>
		</div>
	)
}