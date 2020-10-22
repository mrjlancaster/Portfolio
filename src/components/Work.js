import React, { useState } from 'react';
import './Work.css';

import AM2 from './cards/AM2';
import Padaone2 from './cards/Padaone2';
import Trans1go2 from './cards/Trans1go2';
import ArcadeGame2 from './cards/ArcadeGame2';
import WorldClock2 from './cards/WorldClock2';

// material ui imports
import { Typography } from '@material-ui/core';

const Work = () => {
	const [active, setActive] = useState(false);
	// const [component, setComponent] = useState(false);

	const display = () => {
		setActive(!active);
	}

	// const list = ['Trans1go.com', 'Padaone Inc', 'AM Architecture & Design', 'World Clock (Web App)', 'Arcade game'];

	return (
		<div className="work">
			<Typography className="work_heading" variant="h2">
				Some of my work
			</Typography>
			<div className="work_container">
				<div className="project_list-container">
					<ul className="projects_ul">
						<li onClick={display} className={active ? 'projects-li' : 'project--active'}>Trans1go.com</li>
						<li className="projects-li">Padaone Inc</li>
						<li className="projects-li">AM Architecture & Design</li>
						<li className="projects-li">World Clock (Web App)</li>
						<li className="projects-li">Arcade game</li>
					</ul>
				</div>
				<div className="projects">
					<Trans1go2 />
					<Padaone2 />
					<AM2 />
					<WorldClock2 />
					<ArcadeGame2 />
				</div>
			</div>
		</div>

	)
}

export default Work;
