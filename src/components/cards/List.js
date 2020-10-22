import React from 'react';
import './List.css';

const List = () => {
	return (
		<div className="project_list-container">
			<ul className="projects_ul">
				<li className="projects-li project--active">Trans1go.com</li>
				<li className="projects-li">Padaone Inc</li>
				<li className="projects-li">AM Architecture & Design</li>
				<li className="projects-li">World Clock (Web App)</li>
				<li className="projects-li">Arcade game</li>
			</ul>
		</div>

	)
}

export default List;
