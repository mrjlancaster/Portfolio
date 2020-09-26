import React from 'react';

// Cards imports
import Trans1go from './cards/Trans1go';
import PadaOne from './cards/PadaOne';

// Material UI imports
import useStyles from '../styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';


const Projects = () => {

	const classes = useStyles();

	return (
		<Box>
			<Typography variant="h4" className={classes.projectsHeading}>
				Projects
			</Typography>

			<Grid container spacing={2} className={classes.gridContainer}>
				<Grid item className={classes.gridItem} xs={2}>
					<Trans1go /> 
				</Grid>

				<Grid item className={classes.gridItem} xs={2}>
					<PadaOne />
				</Grid>

				<Grid item className={classes.gridItem} xs={2}>
				
				</Grid>

				<Grid item className={classes.gridItem} xs={2}>
			
				</Grid>
			</Grid>
		</Box>

	)
}

export default Projects;
