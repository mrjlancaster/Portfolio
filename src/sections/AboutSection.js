import { Typography } from "@material-ui/core";
import React from "react";

// import ProfilePicture from '../img/profile_pic.jpg';

const AboutSection = () => {
	return (
		<div id="about" className="about-me">
			<div className="profile_pic-wrapper"></div>
			<div className="text-wrapper">
				<Typography variant="h4">About me</Typography>
				<p className="about-bio">
					I'm a Full-Stack Engineer passionate about building innovative
					web applications and creating modern responsive web designs. My
					main focus as a developer is with JavaScript, React.js, and
					Node.js applications. Throughout my time as a full-stack engineer
					I've learned several technologies and have had some brief
					experiences with different modern frameworks and languages. I'm a
					quick learner. I'm able to learn any new technology very quickly
					and effectively, being able to apply to projects as needed.
					<br />
					<br />
					In my personal time I like to read, code and practice my
					programming skills, create personal projects, play video games
					(of course), and find competitive games/hobbies to participate
					in, such as casual chess. I love doing outdoors activities and
					playing sports such as basketball. Traveling, seeing new places
					and exploring the outside world is also a big interest that takes
					place in my life. The older I get the more I find opportunities
					to go on new adventures.
				</p>
			</div>
		</div>
	);
};

export default AboutSection;
