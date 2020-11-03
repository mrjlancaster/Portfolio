import React from 'react';
import './Technologies.css';

// material ui imports
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';

const Technologies = () => {

	return (
		<div id="my stack" className="tech_container">
			<Box className="typography_container">
				<h4 className="stack_title">My stack</h4>
				<Typography variant="body1">Day in and day out I'm utilizing these technologies to build websites and web applications</Typography>
			</Box>
		
			<div className='grid'>
				<div className="icon_wrapper">
					<h6 className="icon_titles">HTML5</h6>
					<i className="fab fa-html5" style={{color: '#ff5a44'}}></i>
				</div>

				<div className="icon_wrapper">
					<h6 className="icon_titles">CSS3</h6>
					<i className="fab fa-css3-alt" style={{color: '#0a7ae9'}}></i>
				</div>

				<div className="icon_wrapper">
					<h6 className="icon_titles">Sass</h6>
					<i className="fab fa-sass" style={{color: '#e759b8'}}></i>
				</div>

				<div className="icon_wrapper">
					<h6 className="icon_titles">JavaScript</h6>
					<i className="fab fa-js-square" style={{color: '#ffd53d'}}></i>
				</div>

				<div className="icon_wrapper">
					<h6 className="icon_titles">React</h6>
					<i className="fab fa-react" style={{color: '#73d3ff'}}></i>
				</div>

				<div className="icon_wrapper">
					<h6 className="icon_titles">NodeJS</h6>
					<i className="fab fa-node-js" style={{color: '#1f9e54'}}></i>
				</div>
			</div>

		</div> 
	)
}

export default Technologies;
