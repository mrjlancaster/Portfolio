import React from 'react';

// import imgs
import LightMode from '../img/light-mode.png';
import DarkMode from '../img/dark-mode.png';

// import material ui
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';

// import styles
import useStyles from '../styles';

const Calculator = () => {
	const classes = useStyles();

	return (
		<div className={classes.calculatorContainer}>
			<Typography variant="h2">UI Design</Typography>
			<Typography variant="body1">
				The focus when building this calculator was only on the design. The idea creating this was to implement the dark mode switch functionality.
			</Typography>
			<div className={classes.leftBox}>
				<Typography variant="h2">
					Light <br />
					Mode
				</Typography>
				<img src={LightMode} alt="calculator" className={classes.lightCalc} />
			</div>
			<div className={classes.rightBox}>
				<img src={DarkMode} alt="calculator" className={classes.calc} />
				<Box>
				<Typography variant="h2">Dark Mode</Typography>
				<Typography variant="body1" className={classes.darkModeText}>
					The technologies I used here were <b>HTML5, CSS3, JavaScript, and Photoshop.</b> A lot of <span className={classes.ifStatements}>if statements</span> to get this done. Very straight forward.
				</Typography>
				</Box>
				
			</div>
		</div>
	)
}

export default Calculator;
