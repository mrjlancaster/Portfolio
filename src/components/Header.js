import React, { useState } from 'react';
import './Header.css';

import { Link } from 'react-scroll';

const Header = () => {
	const [ showMenu, setShowMenu ] = useState(false);

	return (
		<div className="header">
			<h3 className="logo">mrjlancaster</h3>
			{/* <i onClick={() => setShowMenu(!showMenu)} className="fas fa-bars"></i> */}
			<nav className="navigation">
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
			</nav>
		</div>
	)
}

export default Header;
