import React from 'react';

// import styles
import useStyles from '../styles';

const Calculator = () => {
	const classes = useStyles();

	return (
		<div className={classes.calculatorContainer}>
			<div className={classes.leftBox}>
			</div>
			<div className={classes.rightBox}>
			</div>
		</div>
	)
}

export default Calculator;
