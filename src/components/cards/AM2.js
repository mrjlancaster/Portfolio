import React from 'react';
import './AM2.css';

// import img
import pic from '../../img/am.jpg';

// material ui imports
import { Typography } from '@material-ui/core';

const AM2 = () => {
	return (
		<div className="am2">
			<div className="project-container">
				<img src={pic} className="pic" alt="am" />
				<div className="project-details">
					<Typography variant="h4" className="project-Title">AM Architecture & Design</Typography>
					<Typography variant="body1" className="project-description">This is a mockup website I've built based on a design I found as an inspiration. AM Architecture & Design was built utilizing <b>HTML5 and CSS3.</b> Simple, elegant and great design.</Typography>
					<div>
						<button className="projectBtn">See project</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AM2;
