import React, { useState } from "react";
import "./Work.css";

// import './cards/AM2.css'
import Trans1go2 from "./cards/Trans1go2";

// import screenshots
import Trans1goScreenshot from "../img/trans1go.jpg";
import PadaoneScreenshot from "../img/padaone.jpg";
import AMScreenshot from "../img/am.jpg";
import WorldClockScreenshot from "../img/world_clock.jpg";
import ArcadeGameScreenshot from "../img/arcade_game.jpg";

// material ui imports
import { Typography } from "@material-ui/core";

const Work = () => {
	const [li, setLi] = useState("trans1go.com");
	const [project, setProject] = useState({
		image: Trans1goScreenshot,
		title: "Trans1go.com",
		description: `Trans1go.com is an auto repair shop focused on delivering mobile repairs (service at your door). Responsive website, mobile and tablet friendly. Front-end and back-end technologies were used in this project, such as HTML5, CSS3/Sass, Javascript, nodeJS, and REST APIs.`,
		link: "http://trans1go.com/",
	});

	const switchLi = (e) => {
		const key = e.target;
		if (key.matches("li")) {
			if (key.innerText === "Trans1go.com") {
				setLi("trans1go.com");
				setProject({
					image: Trans1goScreenshot,
					title: "Trans1go.com",
					description: `Trans1go.com is an auto repair shop focused on delivering mobile repairs (service at your door). Responsive website, mobile and tablet friendly. Front-end and back-end technologies were used in this project, such as HTML5, CSS3/Sass, Javascript, nodeJS, and REST APIs.`,
					link: "http://trans1go.com/",
				});
			}

			if (key.innerText === "Padaone Inc") {
				setLi("padaone");
				setProject({
					image: PadaoneScreenshot,
					title: "Padaone Inc",
					description:
						"Padaone is a marketplace for individuals to take classes and train with coaches all over the world. I was responsible to build the first company's Landing Page. Technologies used in this project were HTML5, CSS3/Sass, and Javascript.",
					link: "https://www.padaone.app/",
				});
			}

			if (key.innerText === "AM Architecture & Design") {
				setLi("am");
				setProject({
					image: AMScreenshot,
					title: "AM Architecture & Design",
					description:
						"This is a mockup website I've built based on a design I found as an inspiration. AM Architecture & Design was built utilizing HTML5 and CSS3. Simple, elegant and great design.",
					link: "https://mrjlancaster.github.io/Responsive-website/",
				});
			}

			if (key.innerText === "World Clock (Web App)") {
				setLi("worldclock");
				setProject({
					image: WorldClockScreenshot,
					title: "World clock web application",
					description:
						"Simple digital world clock web application built in HTML5,CSS3, and JavaScript.",
					link: "https://mrjlancaster.github.io/world_clock/",
				});
			}

			if (key.innerText === "Arcade game") {
				setLi("arcade game");
				setProject({
					image: ArcadeGameScreenshot,
					title: "Arcade Game",
					description:
						"I've used my Javascript skills to build an Arcade game. Just for the fun also for my daily coding practices. Check it out!",
					link: "https://mrjlancaster.github.io/Arcade-Game/",
				});
			}
		}
	};

	return (
		<div id="work" className="work">
			<Typography className="work_heading" variant="h4">
				Some of my work
			</Typography>
			<div className="work_container">
				<div className="project_list-container">
					<ul onClick={switchLi}className="projects_ul">
						<li
							className={
								li === "trans1go.com"
									? "project--active"
									: "projects-li"
							}
						>
							Trans1go.com
						</li>
						<li
							className={
								li === "padaone" ? "project--active" : "projects-li"
							}
						>
							Padaone Inc
						</li>
						<li
							className={li === "am" ? "project--active" : "projects-li"}
						>
							AM Architecture & Design
						</li>
						<li
							className={
								li === "worldclock" ? "project--active" : "projects-li"
							}
						>
							World Clock (Web App)
						</li>
						<li
							className={
								li === "arcade game" ? "project--active" : "projects-li"
							}
						>
							Arcade game
						</li>
					</ul>
				</div>

				<div className="projects">
					<div className="project_details">
						<div className="project-container">
							<img
								src={project.image}
								className="pic"
								alt="trans1go image"
							/>
							<div className="project_text-wrapper">
								<Typography variant="h5" className="project-Title">
									{project.title}
								</Typography>
								<Typography
									variant="body1"
									className="project-description"
								>
									{project.description}
								</Typography>
								<div>
									<a
										href={project.link}
										target="blank"
										className="projectBtn"
									>
										See Project
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
