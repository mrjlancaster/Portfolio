import React from 'react';
// import { Link } from 'react-router-dom';

// Material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../styles';
import { Typography } from '@material-ui/core';


const Header = () => {

	const classes = useStyles();

	return (
		<div>
			<AppBar className={classes.bar} position="static">
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" className={classes.signature}>Mrjlancaster</Typography>
					<ul className={classes.ul}>
						<li className={classes.li}>Home</li>
						<li className={classes.li}>Projects</li>
						<li className={classes.li}>Contact</li>
						{/* <li>
							<Link to='/' className={classes.li} onClick={displayHome}>Home</Link>
						</li>
						<li>
							<Link to='/Projects' className={classes.li} onClick={displayProjects}>Projects</Link>
						</li>
						<li>
							<Link to='/Contact' className={classes.li} onClick={displayContact}>Contact</Link>
						</li> */}
					</ul>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header;
