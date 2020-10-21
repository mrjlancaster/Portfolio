import React from 'react';
import { Link } from 'react-scroll';
import './Welcome.css'

// Material UI imports
import useStyles from '../styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Welcome() {
	const classes = useStyles();

	return (
		<div id="welcome" className={classes.welcomeContainer}>
			<div>
				<ul>
					{/* <Link
					activeClass="active" 
					to="about"
					spy={true}
					smooth={true} 
					duration={1500}
					className="li"
					>
					About
					</Link> */}
					<Link
					activeClass="active" 
					to="projects" 
					smooth={true}
					spy={true}
					offset={-50}
					duration={1000}
					className="li"
					>
					Projects
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
			{/* <button className="down-button">
				<i className="fas fa-chevron-down"></i>
			</button> */}
		</div>
	)
}

export default Welcome;
