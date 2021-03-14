import React from "react";
import "./Technologies.css";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

// material ui imports
import { Box } from "@material-ui/core";

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

			<div>
				<ul className="tech__list">
					<li className="tech__item">
						<FaReact style={{ color: "#73d3ff" }} />
					</li>
					<li className="tech__item">
						<FaJs style={{ color: "#f0db4f" }} />
					</li>
					<li className="tech__item">
						<FaHtml5 style={{ color: "#f06529" }} />
					</li>
					<li className="tech__item">
						<FaCss3 style={{ color: "#0a7ae9" }} />
					</li>
					<li className="tech__item">
						<DiMongodb style={{ color: "#4DB33D" }} />
					</li>
					<li className="tech__item">
						<FaSass style={{ color: "#e759b8" }} />
					</li>
					<li className="tech__item">
						<FaNodeJs style={{ color: "3C873A" }} />
					</li>
					<li className="tech__item">
						<FaGitAlt style={{ color: "#f34f29" }} />
					</li>
					<li className="tech__item">
						<FaGithub />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Technologies;
