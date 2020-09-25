import React from 'react';

// Material UI imports
import useStyles from '../styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function Welcome() {

	const classes = useStyles();

	return (
		<div>
			<Typography variant="p" className={classes.welcomeTitle}>
				Hey, I'm Jonathan,<br />
				A Front-end Developer<br />
				<hr />
			</Typography>
			<Box>
				<p to="https://github.com/mrjlancaster"><i class="fab fa-github"></i></p>
				<p to="https://www.linkedin.com/in/mrjlancaster"><i class="fab fa-linkedin-in"></i></p>
			</Box>
		</div>

	)
}

export default Welcome;
