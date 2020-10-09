import React from 'react';

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
			<div className={classes.projectsContainer}>
				<div className="trans1go">
					<div className={classes.picContainer}>
						<img className={classes.pics} src={Trans1go} alt="Trans1go.com" />
					</div>
					<div className={classes.details}>
						<Typography variant="p">Tech used:</Typography>
						<a className={classes.button} href="http://trans1go.com/" target="blank">See project</a>
					</div>
				</div>

				<div className="padaOne">
					<div className={classes.picContainer}>
						<img className={classes.pics} src={padaOne} alt="PadaOne" />
					</div>
					<div className={classes.details}>
						<Typography variant="p">Tech used:</Typography>
						<a className={classes.button} href="https://www.padaone.app/" target="blank">See project</a>
					</div>
				</div>

				<div className="worldClock">
					<div className={classes.picContainer}>
						<img className={classes.pics} src={WorldClock} alt="World digital clock" />
					</div>
					<div className={classes.details}>
						<Typography variant="p">Tech used:</Typography>
						<a className={classes.button} href="https://mrjlancaster.github.io/world_clock/" target="blank">See project</a>
					</div>
				</div>

				<div className="am">
					<div className={classes.picContainer}>
						<img className={classes.pics} src={am} alt="Architecture and design website" />
					</div>
					<div className={classes.details}>
						<Typography variant="p">Tech used:</Typography>
						<a className={classes.button} href="https://mrjlancaster.github.io/Responsive-website/" target="blank"></a>
					</div>
				</div>

				<div className="ArcadeGame">
					<div className={classes.picContainer}>
						<img className={classes.pics} src={ArcadeGame} alt="Arcade Game" />
					</div>
					<div className={classes.details}>
						<Typography variant="p">Tech used:</Typography>
						<a className={classes.button} href="https://mrjlancaster.github.io/Arcade-Game/" target="blank"></a>
					</div>
				</div>
			</div>
		</Box>

	)
}

export default Projects;
