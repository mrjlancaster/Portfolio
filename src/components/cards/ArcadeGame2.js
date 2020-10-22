import React from 'react';
import './ArcadeGame2.css';

// import img
import GameScreenshot from '../../img/arcade_game.jpg';

// material ui imports
import { Typography } from '@material-ui/core';

const ArcadeGame2 = () => {
	return (
		<div className="arcadeGame2">
			<div className="project-container">
				<img src={GameScreenshot} className="pic" alt="Game screenshot" />
				<div className="project-details">
					<Typography variant="h4" className="project-Title">Arcade game</Typography>
					<Typography variant="body1" className="project-description">I've used my <b>Javascript</b> skills to build an Arcade game. Just for the fun also for my daily coding practices. Check it out!
					</Typography>
					<div>
						<button className="projectBtn">See project</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArcadeGame2;
