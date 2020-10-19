import React from 'react';

// import imgs
import LightMode from '../img/light-mode.png';
import DarkMode from '../img/dark-mode.png';

// import material ui
import { Typography } from '@material-ui/core';

// import styles
import useStyles from '../styles';

const Calculator = () => {
	const classes = useStyles();

	return (
		<div className={classes.calculatorContainer}>
			<Typography variant="h2">UI Design</Typography>
			<div className={classes.leftBox}>
				<Typography variant="h2">
					Light <br />
					Mode
				</Typography>
					<img src={LightMode} alt="calculator" className={classes.calc} />
			</div>
			<div className={classes.rightBox}>
				<img src={DarkMode} alt="calculator" className={classes.calc} />
				<Typography variant="h2">Dark Mode</Typography>
			</div>
		</div>
	)
}

export default Calculator;
