import React, { useContext }  from 'react';
import { Form } from '../components/Form';
import { MyContext } from '../context/AppContext';
import { Loader } from '../components/Loader';
import { Alert } from '../components/Alert.js'
import '../styles/components/Home.css';

export const Home = () => {

	const {
		onSubmit,
		setLocation,
		loader,
		errorModal,
		setErrorModal
	} = useContext(MyContext);

	const closeModal = () => {
		setErrorModal(false)
	}

	return (
		<div className="container-form">
			{ loader && <Loader /> }
			{ errorModal && <Alert closeModal={closeModal}/> }
			<Form onSubmit={onSubmit} setLocation={setLocation}/>
		</div>
	)
}