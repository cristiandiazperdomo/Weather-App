import React, { useContext }  from 'react';
import { Form } from '../components/Form';
import { MyContext } from '../context/AppContext';
import { Loader } from '../components/Loader';

import '../styles/components/Home.css';

export const Home = () => {

	const { onSubmit, setLocation, loader } = useContext(MyContext);

	return (
		<div className="container-form">
			{ loader && <Loader /> }
			<Form onSubmit={onSubmit} setLocation={setLocation}/>
		</div>
	)
}