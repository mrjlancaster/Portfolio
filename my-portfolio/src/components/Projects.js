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
					<a href="http://trans1go.com/" target="blank">
						<img className={classes.pics} src={Trans1go} alt="Trans1go.com" />
					</a>
				</div>

				<div className="padaOne">
					<a href="https://www.padaone.app/" target="blank">
						<img className={classes.pics} src={padaOne} alt="PadaOne" />
					</a>
				</div>

				<div className="worldClock">
					<a href="https://mrjlancaster.github.io/world_clock/" target="blank">
						<img className={classes.pics} src={WorldClock} alt="World digital clock" />
					</a>
				</div>

				<div className="am">
					<a href="https://mrjlancaster.github.io/Responsive-website/" target="blank">
						<img className={classes.pics} src={am} alt="Architecture and design website" />
					</a>
				</div>

				<div className="ArcadeGame">
					<a href="https://mrjlancaster.github.io/Arcade-Game/" target="blank">
						<img className={classes.pics} src={ArcadeGame} alt="Arcade Game" />
					</a> 
				</div>
			</div>
		</Box>

	)
}

export default Projects;