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
		<Cards />
		// <Box className={classes.projectsBox}>
		// 	<Typography variant="h2" className={classes.projectsHeading}>
		// 		Projects
		// 	</Typography>
		// 	<div className={classes.projectsContainer}>

		// 			<div className={classes.box}>
		// 				<div className={classes.picContainer}>
		// 					<img className={classes.pics} src={Trans1go} alt="Trans1go.com" />
		// 					<Typography className={classes.text} variant="p">Trans1go.com</Typography>
		// 				</div>
		// 				<div className={classes.details}>
		// 					{/* <Typography variant="p">Tech used:</Typography> */}
		// 					<a className={classes.button} href="http://trans1go.com/" target="blank">See project</a>
		// 				</div>
		// 			</div>
			

		// 		<div className={classes.box}>
		// 			<div className={classes.picContainer}>
		// 				<img className={classes.pics} src={padaOne} alt="PadaOne" />
		// 				<Typography variant="p">
		// 					PadaOne
		// 				</Typography>
		// 			</div>
		// 			<div className={classes.details}>
		// 				{/* <Typography variant="p">Tech used:</Typography> */}
		// 				<a className={classes.button} href="https://www.padaone.app/" target="blank">See project</a>
		// 			</div>
		// 		</div>

		// 		<div className={classes.box}>
		// 			<div className={classes.picContainer}>
		// 				<img className={classes.pics} src={WorldClock} alt="World digital clock" />
		// 				<Typography variant="p">
		// 					Digital World Clock
		// 				</Typography>
		// 			</div>
		// 			<div className={classes.details}>
		// 				{/* <Typography variant="p">Tech used:</Typography> */}
		// 				<a className={classes.button} href="https://mrjlancaster.github.io/world_clock/" target="blank">See project</a>
		// 			</div>
		// 		</div>

		// 		<div className={classes.box}>
		// 			<div className={classes.picContainer}>
		// 				<img className={classes.pics} src={am} alt="Architecture and design website" />
		// 				<Typography variant="p">
		// 					AM \n
		// 					Architecture and Design
		// 				</Typography>
		// 			</div>
		// 			<div className={classes.details}>
		// 				{/* <Typography variant="p">Tech used:</Typography> */}
		// 				<a className={classes.button} href="https://mrjlancaster.github.io/Responsive-website/" target="blank">See project</a>
		// 			</div>
		// 		</div>

		// 		<div className={classes.box}>
		// 			<div className={classes.picContainer}>
		// 				<img className={classes.pics} src={ArcadeGame} alt="Arcade Game" />
		// 				<Typography variant="p">
		// 					Arcade Game
		// 				</Typography>
		// 			</div>
		// 			<div className={classes.details}>
		// 				{/* <Typography variant="p">Tech used:</Typography> */}
		// 				<a className={classes.button} href="https://mrjlancaster.github.io/Arcade-Game/" target="blank">See project</a>
		// 			</div>
		// 		</div>
		// 	</div>
		// </Box>

	)
}

export default Projects;
