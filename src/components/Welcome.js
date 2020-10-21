import React from 'react';
import './Welcome.css'

// Material UI imports
import useStyles from '../styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Welcome() {


	const classes = useStyles();

	return (
		<div className={classes.welcomeContainer}>
			<div>
				<ul>
					<li>Welcome</li>
					<li>About</li>
					<li>My Stack</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
					
			</div> 
			<div className='welcomeSection'>
				<Typography variant="h2" className={classes.welcomeTitle}>
					Hey, I'm Jonathan,<br />
					A Front-end Developer<br />
						<hr className={classes.welcomeSeparator} />
				</Typography>
				<Box>
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
