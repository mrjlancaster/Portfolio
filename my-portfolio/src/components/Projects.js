import React from 'react';

// Cards imports
import Trans1go from './cards/Trans1go';
import PadaOne from './cards/PadaOne';
import ArcadeGame from './cards/ArcadeGame';
import AM from './cards/AM';
import WorldClock from './cards/WorldClock';



// Material UI imports
import useStyles from '../styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'

const Projects = () => {

	const classes = useStyles();

	return (
		<Box>
			<Typography variant="h4" className={classes.projectsHeading}>
				Projects
			</Typography>

			<Grid container spacing={4} alignItems="center" className={classes.gridContainer}>
				<Grid item className={classes.gridItem} justify="center" xs={6}>
					<Trans1go /> 
				</Grid>

				<Grid item className={classes.gridItem} xs={6}>
					<PadaOne />
				</Grid>

				<Grid item className={classes.gridItem} xs={4}>
					<AM />
				
				</Grid>

				<Grid item className={classes.gridItem} xs={4}>
					<WorldClock />
			
				</Grid>
				<Grid item className={classes.gridItem} xs={4}>
					<ArcadeGame />
			
				</Grid>
			</Grid>
		</Box>

	)
}

export default Projects;
