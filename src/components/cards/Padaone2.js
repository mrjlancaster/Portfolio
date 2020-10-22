import React from 'react';
import './Padaone2.css';

// import img
import PadaonePic from '../../img/padaone.jpg';

// material ui imports
import { Typography } from '@material-ui/core';

const Padaone2 = () => {
	return (
		<div className="padaone2">
			<div className="project-container">
				<img src={PadaonePic} className="pic" alt="padaone picture" />
				<div className="project-details">
					<Typography variant="h4" className="project-Title">Padaone Inc</Typography>
					<Typography variant="body1" className="project-description">Padaone is a marketplace for individuals to take classes and train with coaches all over the world. I was responsible to build the first company's Landing Page. Technologies used in this project were <b>HTML5, CSS3/Sass, and Javascript.</b></Typography>
					<div>
						<button className="projectBtn">See project</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Padaone2;
