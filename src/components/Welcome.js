import React, { useState } from 'react';
import './Welcome.css'

// Material UI imports
import useStyles from '../styles';
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
			<div className='welcomeSection'>
				<h2 className='welcome__title'>
					Hey, I'm Jonathan,<br />
					A Front-end Developer<br />
				</h2>
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
