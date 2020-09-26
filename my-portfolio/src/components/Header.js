import React from 'react';

// Material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../styles';


const Header = () => {

	// const [navbar, setNavbar] =  useState({
	// 	visible: false
	// });

	const classes = useStyles();

	const displayHome = () => {

	}

	const displayProjects = () => {

	}

	const displayContact = () => {

	}

	return (
		<div className={classes.root}>
			<AppBar className={classes.bar} position="static">
				<Toolbar>
					<ul className={classes.ul}>
						<li className={classes.li} onClick={displayHome}>Home</li>
						<li className={classes.li} onClick={displayProjects}>Projects</li>
						<li className={classes.li} onClick={displayContact}>Contact</li>
					</ul>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header;
