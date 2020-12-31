import React from 'react';
import './Header.css';

import { Link } from 'react-scroll';

const Header = () => {
	return (
		<div className="header">
			<h3 className="logo">mrjlancaster</h3>
			<nav>
				<ul className="nav__list">
					<li className="nav__item"><Link
							activeClass="active" 
							to="about"
							spy={true}
							smooth={true} 
							offset={-90}
							duration={1500}
							>
							About me
						</Link>
					</li>
					<li className="nav__item"><Link
							activeClass="active" 
							to="work" 
							smooth={true}
							spy={true}
							offset={-50}
							duration={1000}
							>
							Projects
						</Link>
					</li>
					<li className="nav__item"><Link
							activeClass="active" 
							to="my stack"
							spy={true}
							smooth={true}
							offset={-90}
							duration={1500}
							>
							My Stack
						</Link>
					</li>
					<li className="nav__item"><Link
							activeClass="active" 
							to="contact" 
							smooth={true}
							spy={true}
							duration={1500}
							>
							Contact
						</Link>
					</li>
				</ul>
				<i className="fas fa-bars"></i>
			</nav>
		</div>
	)
}

export default Header;
