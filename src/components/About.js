import React from "react";
import "./About.css";

// import ProfilePicture from '../img/profile_pic.jpg';

const About = () => {
	return (
		<div id="about" className="about-me">
			<div className="profile_pic-wrapper"></div>
			<div className="text-wrapper">
				<h4 className="about-title">About me</h4>
				<p className="about-bio">
					I'm a Frontend Engineer passionate about building innovative web
					applications and creating modern responsive web designs. My main
					focus as a developer is with JavaScript and React.js
					applications. Throughout my time as a frontend engineer I've
					learned several technologies and have had some brief experiences
					with different modern frameworks and languages. I'm a quick
					learner. I'm able to learn any new technology very quickly and
					effectively, being able to apply to projects as needed.
					<br />
					<br />
					In my personal time I like to read, code and practice my
					programming skills, create personal projects, play video games
					(of course), and find competitive games/hobbies to participate
					in, such as Men's Physique contests, and casual chess. I love
					doing outdoors activities and playing sports such as basketball.
					Traveling and seeing new places and exploring the outside world
					is also a big interest that takes place in my life. The older I
					get the more I find opportunities to go on new adventures.
				</p>
			</div>
		</div>
	);
};

export default About;
