import React, { useState } from "react";
import { Button, ButtonBase, Link, Typography } from "@material-ui/core";

// import './cards/AM2.css'
// import Trans1go2 from "./cards/Trans1go2";

// import screenshots
import Trans1goScreenshot from "../img/trans1go.jpg";
import PadaoneScreenshot from "../img/padaone.jpg";
import AMScreenshot from "../img/am.jpg";
import WorldClockScreenshot from "../img/world_clock.jpg";
import ArcadeGameScreenshot from "../img/arcade_game.jpg";
import TicTacToeScreenshot from "../assets/tic-tac-toe.png";

// material ui imports

const MyWorkSection = () => {
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
			image: TicTacToeScreenshot,
			title: "Tic Tac Toe",
			description: "Created Tic Tac Toe just for fun. Check it out!",
			link: "https://mrjlancaster.github.io/tic-tac-toe/",
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
								<Typography variant="h5">
									{tabContent[activeTab].title}
								</Typography>

								<Typography variant="body2">
									{tabContent[activeTab].description}
								</Typography>

								<div>
									<Button
										variant="contained"
										href={tabContent[activeTab].link}
										target="_blank"
										underline="none"
										rel="noreferrer"
										// color="primary"
										size="small"
										style={{
											textTransform: "none",
											background: "#fff",
											color: "#000",
										}}
										disableElevation
									>
										See Project
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyWorkSection;
