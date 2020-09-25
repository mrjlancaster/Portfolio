import React from 'react';

// Material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles';


function Header() {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.bar} position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Jonathan Lancaster
					</Typography>
					<ul className={classes.ul}>
						<li className={classes.li}>Home</li>
						<li className={classes.li}>Projects</li>
						<li className={classes.li}>Contact</li>
					</ul>
				</Toolbar>
			</AppBar>
    	</div>
	)
}

export default Header;
