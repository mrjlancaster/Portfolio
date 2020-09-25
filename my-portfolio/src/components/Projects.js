import React from 'react';

// Material UI imports
import useStyles from '../styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'

function Projects() {

	const classes = useStyles();

	return (
		<Box>
			<Typography variant="h4" className={classes.projectsHeading}>
				Projects
			</Typography>

			<Grid container className={classes.projects}>
				<Grid item className={classes.projectBox} xs={2}>Hello</Grid>
				<Grid item className={classes.projectBox} xs={2}>Hello</Grid>
				<Grid item className={classes.projectBox} xs={2}>Hello</Grid>
				<Grid item className={classes.projectBox} xs={2}>Hello</Grid>
			</Grid>
		</Box>

	)
}

export default Projects;
