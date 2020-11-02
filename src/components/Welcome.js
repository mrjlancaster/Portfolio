import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Welcome.css'

// Material UI imports
import useStyles from '../styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Welcome() {
	const classes = useStyles();

	const [nav, setNav] = useState({opacity: '0'})
	const [intro, setIntro] = useState({opacity: '0'});
	const [isShown,setIsShown] = useState({opacity: '0'})
	

	
	window.addEventListener('load', () => {
		setTimeout(() => {
			setIntro({
				opacity: '1',
				transition: '1100ms'
			})
		}, 500);
		setTimeout(() => {
			setNav({
				opacity: '1',
				transition: '1200ms'
			})
		}, 2300);
		setTimeout(() => {
			setIsShown({
				opacity: '1',
				transition: '1200ms'
			})
		}, 4000);
	})

	return (
		<div id="welcome" className={classes.welcomeContainer}>
			<div>
				<ul className="navBar-ul" style={nav}>
					<Link
					activeClass="active" 
					to="about"
					spy={true}
					smooth={true} 
					offset={-90}
					duration={1500}
					className="li"
					>
					About
					</Link>
					<Link
					activeClass="active" 
					to="work" 
					smooth={true}
					spy={true}
					offset={-50}
					duration={1000}
					className="li"
					>
					Work
					</Link>
					<Link
					activeClass="active" 
					to="my stack"
					spy={true}
					smooth={true}
					offset={-90}
					duration={1500}
					className="li"
					>
					My Stack
					</Link>
					<Link
					activeClass="active" 
					to="contact" 
					smooth={true}
					spy={true}
					duration={1500}
					className="li"
					>
					Contact
					</Link>
				</ul>
			</div> 
			<div className='welcomeSection'>
				<Typography style={intro} variant="h2" className={classes.welcomeTitle}>
					Hey, I'm Jonathan,<br />
					A Front-end Developer<br />
				</Typography>
				<Box className="social-icons" style={isShown}>
					<a href="https://github.com/mrjlancaster" target="_blank" className={classes.socialLinks}>
						<i className="fab fa-github"></i>
					</a>
					<a href="https://www.linkedin.com/in/mrjlancaster" target="_blank" className={classes.socialLinks}>
						<i className="fab fa-linkedin-in"></i>
					</a>
				</Box>
			</div>
		</div>
	)
}

export default Welcome;
