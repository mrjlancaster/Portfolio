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
	const [li, setLi] = useState('trans1go.com');

	const switchLi = (e) => {
		const key = e.target;
		if (key.matches('li')) {
			if (key.innerText === 'Trans1go.com') {
				setLi('trans1go.com');
			}

			if (key.innerText === 'Padaone Inc') {
				setLi('padaone');
			}

			if (key.innerText === 'AM Architecture & Design') {
				setLi('am');
			}

			if (key.innerText === 'World Clock (Web App)') {
				setLi('worldclock');
			}

			if (key.innerText === 'Arcade game') {
				setLi('arcade game');
			}
		}
	}

	return (
		<div className="work">
			<Typography className="work_heading" variant="h2">
				Some of my work
			</Typography>
			<div className="work_container">
				<div className="project_list-container">
					<ul onClick={switchLi} className="projects_ul">

						<li className={li === 'trans1go.com' ? 'project--active' : 'projects-li'}>Trans1go.com</li>


						<li className={li === 'padaone' ? 'project--active' : 'projects-li'}>Padaone Inc</li>


						<li className={li === 'am' ? 'project--active' : 'projects-li'}>AM Architecture & Design</li>

						<li className={li === 'worldclock' ? 'project--active' : 'projects-li'}>World Clock (Web App)</li>
						<li className={li === 'arcade game' ? 'project--active' : 'projects-li'}>Arcade game</li>
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
