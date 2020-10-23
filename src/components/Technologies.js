import React from 'react';
import './Technologies.css';

// material ui imports
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';



const Technologies = () => {

	return (
		<div id="my stack" className="tech_container">
			<Box className="typography_container">
				<Typography variant="h4" className="heading">My stack</Typography>
				<Typography variant="body1">Day in and day out I'm utilizing these technologies to build websites and web applications</Typography>
			</Box>
		
			<div className='grid'>
				<div className="icon_wrapper">
					<Typography variant="h6">HTML5</Typography>
					<i className="fab fa-html5" style={{color: '#ff5a44'}}></i>
				</div>

				<div className="icon_wrapper">
					<Typography variant="h6">CSS3</Typography>
					<i className="fab fa-css3-alt" style={{color: '#0a7ae9'}}></i>
				</div>

				<div className="icon_wrapper">
					<Typography variant="h6">Sass</Typography>
					<i className="fab fa-sass" style={{color: '#e759b8'}}></i>
				</div>

				<div className="icon_wrapper">
					<Typography variant="h6">JavaScript</Typography>
					<i className="fab fa-js-square" style={{color: '#ffd53d'}}></i>
				</div>

				<div className="icon_wrapper">
					<Typography variant="h6">React</Typography>
					<i className="fab fa-react" style={{color: '#73d3ff'}}></i>
				</div>

				<div className="icon_wrapper">
					<Typography variant="h6">NodeJS</Typography>
					<i className="fab fa-node-js" style={{color: '#1f9e54'}}></i>
				</div>
			</div>

		</div> 
	)
}

export default Technologies;
