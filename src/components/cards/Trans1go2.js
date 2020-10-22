import React from 'react';
import './Trans1go2.css';

// import img
import Trans1goPic from '../../img/trans1go.jpg';

// material ui imports
import { Typography } from '@material-ui/core';

const Trans1go2 = () => {
	return (
		<div className="trans1go2">
			<div className="project-container">
				<img src={Trans1goPic} className="pic" alt="trans1go image" />
				<div className="project-details">
					<Typography variant="h4" className="project-Title">Trans1go.com</Typography>
					<Typography variant="body1" className="project-description">Trans1go.com is an auto repair shop focused on delivering mobile repairs (service at your door). Responsive website, mobile and tablet friendly. Front-end and back-end technologies were used in this project, such as <b> HTML5, CSS3/Sass, Javascript, nodeJS, and REST APIs.</b>
					</Typography>
					<div>
						<button className="projectBtn">See project</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Trans1go2;
