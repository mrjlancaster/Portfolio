import React from 'react';
import Cards from './Cards';

// Material UI imports
import useStyles from '../styles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'

const Projects = () => {
	const classes = useStyles();

	return (
		<Box className={classes.projectsBox}>
			<Typography variant="h3" className={classes.projectsHeading}>
				Projects
			</Typography>
			<Cards />
		</Box>
	)
}

export default Projects;
