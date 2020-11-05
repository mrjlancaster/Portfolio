import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

// Material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../styles';
import { Typography } from '@material-ui/core';


const Header = () => {
	const classes = useStyles();

	const handleScroll = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div>
			<AppBar className={classes.bar} position="static">
				<Toolbar className={classes.toolbar}>
					<Typography onClick={handleScroll} variant="h6" className={classes.signature}>Mrjlancaster
					</Typography>
					{/* <i className="fas fa-bars"></i> */}
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header;
