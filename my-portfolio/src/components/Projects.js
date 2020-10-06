import React from 'react';

// images import
import Trans1go from '../img/trans1go.jpg';

// Cards imports
// import Trans1go from './cards/Trans1go';
// import PadaOne from './cards/PadaOne';
// import ArcadeGame from './cards/ArcadeGame';
// import AM from './cards/AM';
// import WorldClock from './cards/WorldClock';



// Material UI imports
import useStyles from '../styles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'

const Projects = () => {

	const classes = useStyles();

	return (
		<Box>
			<Typography variant="h4" className={classes.projectsHeading}>
				Projects
			</Typography>
			<div className="trans1go">
				<img className={classes.pics} src={Trans1go} alt="" />
			</div>

			<div className="padaOne">
				<img className={classes.pics} src="" alt="" />
			</div>

			<div className="worldClock">
				<img className={classes.pics} src="" alt="" />
			</div>

			<div className="am">
				<img className={classes.pics} src="" alt="" />
			</div>

			<div className="ArcadeGame">
				<img className={classes.pics} src="" alt="" />
			</div>
		</Box>

	)
}

export default Projects;
