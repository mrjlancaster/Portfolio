import React from 'react';
import { Link } from 'react-router-dom';

// Material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../styles';


const Header = () => {

	const classes = useStyles();

	const displayHome = () => {

	}

	const displayProjects = () => {

	}

	const displayContact = () => {

	}

	return (
		<div>
			<AppBar className={classes.bar} position="static">
				<Toolbar className={classes.toolbar}>
					<ul className={classes.ul}>
						<li>
							<Link to='/' className={classes.li} onClick={displayHome}>Home</Link>
						</li>
						<li>
							<Link to='/Projects' className={classes.li} onClick={displayProjects}>Projects</Link>
						</li>
						<li>
							<Link to='/Contact' className={classes.li} onClick={displayContact}>Contact</Link>
						</li>
					</ul>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header;
