import React from 'react';
import Cards from './Cards';
import AM2 from './cards/AM2';

// Material UI imports
import useStyles from '../styles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'

const Projects = () => {
	const classes = useStyles();

	return (
		<Box id="projects" className={classes.projectsBox}>
			<Typography variant="h2" className={classes.projectsHeading}>
				Projects
			</Typography>
			<Cards />
			<AM2 />
		</Box>
	)
}

export default Projects;
