import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.css';

const Header = () => {
	return (
	<>
		<header className="Header">
			<div className="left-side">
				<Link to="/">	
					<h1 className="Header-h1">WeatherApp</h1>
				</Link>
			</div>
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
		<hr />
	</>
	)
}

export default Header;