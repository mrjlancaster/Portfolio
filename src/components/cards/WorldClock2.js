import React from 'react';
import './WorldClock2.css';

// import img
import WorldClockScreenshot from '../../img/world_clock.jpg';

// material ui imports
import { Typography } from '@material-ui/core';

const WorldClock2 = () => {
	return (
		<div className="worldClock2">
			<div className="project-container">
				<img src={WorldClockScreenshot} className="pic" alt="Game screenshot" />
				<div className="project-details">
					<Typography variant="h4" className="project-Title">World clock web application</Typography>
					<Typography variant="body1" className="project-description">Simple digital world clock web application built in <b>HTML5,CSS3, and JavaScript.</b>
					</Typography>
					<div>
						<button className="projectBtn">See project</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WorldClock2;
