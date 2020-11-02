import React from 'react';
import './About.css';

import ProfilePicture from '../img/profile_pic.jpg';

// material ui imports
import { Typography } from '@material-ui/core';

const About = () => {
	return (
		<div id="about" className="about-me">
			<div className="profile_pic-wrapper">
				{/* <img className="profile_picture" src={ProfilePicture} alt="me" /> */}
			</div>
			<div className="text-wrapper">
				<Typography className="about-title" variant="h4">About me</Typography>
				<Typography className="about-bio" variant="body1">
					I'm a Frontend Engineer passionate about building innovative web applications and modern responsive web designs. My main focus as a developer is in HTML, CSS, JavaScript, and ReactJS. Throughout my time as a frontend engineer I've learned several technologies and have had some brief experiences with different modern frameworks and languages. I'm a quick learner, and a self-taught programmer. I'm able to learn any new technology very quickly and effectively, being able to apply to projects as needed.
					<br />
					<br />
					In my personal time I like to read, code and practice my programming skills, create personal projects, play video games (of course), and find competitive games/hobbies to participate in, such as Men's Physique contests, casual chess. I love doing outdoors activities and playing sports such as basketball. Traveling and seeing new places and exploring the outside world is also a big interest that takes place in my life. The older I get the more I find opportunities to go on adventures.
				</Typography>
			</div>
		</div>
	)
}

export default About;
