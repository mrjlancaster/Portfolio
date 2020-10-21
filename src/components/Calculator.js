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
			<Typography variant="h2" className={classes.uiDesign}>UI Design</Typography>
			<Typography variant="body1">
				The focus when building this calculator was on the design. The idea was simply to implement the dark mode switch functionality.
			</Typography>
			<Typography variant="body1">Visit here: <a href="https://mrjlancaster.github.io/calculator-darkmode/" target="blank">https://mrjlancaster.github.io/calculator-darkmode/</a></Typography>
		
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
