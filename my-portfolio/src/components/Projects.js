import React from 'react';
import Cards from './Cards';

// images import
import Trans1go from '../img/trans1go.jpg';
import am from '../img/am.jpg';
import padaOne from '../img/padaone.jpg';
import WorldClock from '../img/world_clock.jpg';
import ArcadeGame from '../img/arcade_game.jpg';

// Material UI imports
import useStyles from '../styles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'

const Projects = () => {

	const classes = useStyles();


	return (
		<Box className={classes.projectsBox}>
			<Typography variant="h2" className={classes.projectsHeading}>
				Projects
			</Typography>
				<Cards />
		// </Box>

	)
}

export default Projects;
