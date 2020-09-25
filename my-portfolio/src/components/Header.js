import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// Material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../styles';


function Header() {

	const classes = useStyles();

	return (
		<Router>
			<div className={classes.root}>
				<AppBar className={classes.bar} position="static">
					<Toolbar>
						<ul className={classes.ul}>
							<li>
								<Link to="/Home" className={classes.li}>Home</Link>
							</li>
							<li>
								<Link to="/Projects" className={classes.li}>Projects</Link>
							</li>
							<li>
								<Link to="/Projects" className={classes.li}>Contact</Link>
							</li>
						</ul>
					</Toolbar>
				</AppBar>
			</div>
		</Router>
	)
}

export default Header;
