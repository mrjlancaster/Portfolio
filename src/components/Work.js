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
	const [activeTab, setActiveTab] = useState(0);

	const tabs = [
		"Trans1go.com",
		"Padaone Inc.",
		"AM Architecture & Design",
		"World Clock (Web App)",
		"Arcade game",
		"Tic Tac Toe",
	];

	const tabContent = [
		{
			image: Trans1goScreenshot,
			title: "Trans1go.com",
			description: `Trans1go.com is an auto repair shop focused on delivering mobile repairs (service at your door). Responsive website, mobile and tablet friendly. Front-end and back-end technologies were used in this project, such as HTML5, CSS3/Sass, Javascript, nodeJS, and REST APIs.`,
			link: "http://trans1go.com/",
		},
		{
			image: PadaoneScreenshot,
			title: "Padaone Inc",
			description:
				"Padaone is a marketplace for individuals to take classes and train with coaches all over the world. I was responsible to build the first company's Landing Page. Technologies used in this project were HTML5, CSS3/Sass, and Javascript.",
			link: "https://www.padaone.app/",
		},
		{
			image: AMScreenshot,
			title: "AM Architecture & Design",
			description:
				"This is a mockup website I've built based on a design I found as an inspiration. AM Architecture & Design was built utilizing HTML5 and CSS3. Simple, elegant and great design.",
			link: "https://mrjlancaster.github.io/Responsive-website/",
		},
		{
			image: WorldClockScreenshot,
			title: "World clock web application",
			description:
				"Simple digital world clock web application built in HTML5,CSS3, and JavaScript.",
			link: "https://mrjlancaster.github.io/world_clock/",
		},
		{
			image: ArcadeGameScreenshot,
			title: "Arcade Game",
			description:
				"I've used my Javascript skills to build an Arcade game. Just for the fun also for my daily coding practices. Check it out!",
			link: "https://mrjlancaster.github.io/Arcade-Game/",
		},
		{
			image: ArcadeGameScreenshot,
			title: "Tic Tac Toe",
			description: "",
			link: "https://github.com/mrjlancaster/tic-tac-toe",
		},
	];

	const handleTab = (e) => {
		const index = e.target.id;
		setActiveTab(Number(index));
	};

	return (
		<div id="work" className="work">
			<Typography className="work_heading" variant="h4">
				Some of my work
			</Typography>
			<div className="work_container">
				<div className="project_list-container">
					<ul onClick={handleTab} className="projects_ul">
						{tabs.map((tab, i) => {
							return (
								<li
									key={i}
									id={i}
									className={
										activeTab === i
											? "project--active"
											: "projects-li"
									}
								>
									{tab}
								</li>
							);
						})}
					</ul>
				</div>

				<div className="projects">
					<div className="project_details">
						<div className="project-container">
							<img
								src={tabContent[activeTab].image}
								className="pic"
								alt="project pic"
							/>
							<div className="project_text-wrapper">
								<h5 className="project_title-name">
									{tabContent[activeTab].title}
								</h5>
								<p className="project-description">
									{tabContent[activeTab].description}
								</p>
								<div>
									<a
										href={tabContent[activeTab].link}
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
