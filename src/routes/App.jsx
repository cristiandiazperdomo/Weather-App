import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../containers/Home';
import { Layout } from '../components/Layout';
import { MyContext } from '../context/AppContext';
import { ShowWeather } from '../components/ShowWeather';
import { useInitialState } from '../hooks/useInitialState';

export const App = () => {

	let initialState = useInitialState()

	return (
		<MyContext.Provider value={initialState}>
			 <Router>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/weather" element={initialState.weatherApiInfo.length === 0 ?  <Navigate to="/"/> : <ShowWeather />} />
					</Routes>
				</Layout>
			</Router>
		</MyContext.Provider>
	)

}	

