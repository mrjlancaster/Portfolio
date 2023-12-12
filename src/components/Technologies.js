import React from "react";
import "./Technologies.css";

// material ui imports
import { Box } from "@material-ui/core";

const tech = [
	{
		title: "HTML5",
		icon: <i className="fab fa-html5" style={{ color: "#ff5a44" }}></i>,
	},
	{
		title: "CSS3",
		icon: <i className="fab fa-css3-alt" style={{ color: "#0a7ae9" }}></i>,
	},
	{
		title: "Sass",
		icon: <i className="fab fa-sass" style={{ color: "#e759b8" }}></i>,
	},
	{
		title: "JavaScript",
		icon: <i className="fab fa-js-square" style={{ color: "#ffd53d" }}></i>,
	},
	{
		title: "React.js",
		icon: <i className="fab fa-react" style={{ color: "#73d3ff" }}></i>,
	},
	{
		title: "NodeJS",
		icon: <i className="fab fa-node-js" style={{ color: "#1f9e54" }}></i>,
	},
];

const Technologies = () => {
	return (
		<div id="my stack" className="tech_container">
			<Box className="typography_container">
				<h4 className="stack_title">My stack</h4>
				<p className="stack_text">
					Day in and day out I'm utilizing these technologies to build
					websites and web applications
				</p>
			</Box>

			<div className="grid">
				{tech.map((item, i) => {
					return (
						<div key={i} className="icon_wrapper">
							<h6 className="icon_titles">{item.title}</h6>
							{item.icon}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Technologies;
