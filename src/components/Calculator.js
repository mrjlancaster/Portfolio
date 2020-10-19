import React from 'react';

// import imgs
import LightMode from '../img/light_calculator.jpg';
import DarkMode from '../img/dark_calculator.jpg';

// import styles
import useStyles from '../styles';

const Calculator = () => {
	const classes = useStyles();

	return (
		<div className={classes.calculatorContainer}>
			<div className={classes.leftBox}>
				<img src={LightMode} alt="calculator" className={classes.calc} />
			</div>
			<div className={classes.rightBox}>
				<img src={DarkMode} alt="calculator" className={classes.calc} />

			</div>
		</div>
	)
}

export default Calculator;
