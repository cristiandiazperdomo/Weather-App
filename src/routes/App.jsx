import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../containers/Home';
import { NotFound } from '../containers/NotFound';
import { Layout } from '../components/Layout';
import { MyContext } from '../context/AppContext';
import { ShowWeather } from '../components/ShowWeather';
import { useInitialState } from '../hooks/useInitialState';

export const App = () => {

	const initialState = useInitialState();

	console.log({cantidad: initialState?.weatherApiInfo?.length, boolean: Boolean(initialState?.weatherApiInfo?.length)});

	return (
		<MyContext.Provider value={initialState}>
			 <Router>
				<Layout>
					<Routes>
						<Route path="*" element={<NotFound/>} />
						<Route exact path="/" element={<Home />} />
						<Route exact path="/weather" element={initialState?.weatherApiInfo.length == false ? <Navigate to="/" /> : <ShowWeather />} />
					</Routes>
				</Layout>
			</Router>
		</MyContext.Provider>
	)

}	

