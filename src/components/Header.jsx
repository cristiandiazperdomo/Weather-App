import { React, useContext } from 'react';
import { Input } from './Input';
import { MyContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

import '../styles/components/Header.css';

const Header = () => {
	const {
		onSubmit,
		setLocation,
		weatherApiInfo,
	} = useContext(MyContext);

	return (
	<>
		<header className="Header">
			<div className="left-side">
				<Link to="/">	
					<h1 className="Header-h1">WeatherApp</h1>
				</Link>
			</div>
			{weatherApiInfo.length !== 0 
				?
				<form onSubmit={onSubmit} className="header-form">
					<Input className={"header-input input-home-check"} setLocation={setLocation} />
					<button className="header-button"><img src={require('../img/icons-search.png')} alt="geography" /></button>
				</form>
				:
				<div className="fill"></div>
			}
			<div className="right-side">	
				<nav>
					<ul className="Header-ul">
						<li>
							<a href="https://github.com/cristiandiazperdomo">	
								Otros proyectos
							</a> 
						</li>
						<li>
							<a href="https://www.linkedin.com/in/cristian-d%C3%ADaz-390971222/">
								Linkedin
							</a>
						</li>
						<li>
							<a href="https://github.com/cristiandiazperdomo">
								GitHub
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	</>
	)
}

export default Header;