import React from 'react';
import './Calculator.css';

// import imgs
import BlueCalculator from '../img/blue-calculator.png';
import DarkCalculator from '../img/dark-calculator.png';
// import LightMode from '../img/light-mode.png';
// import DarkMode from '../img/dark-mode.png';

// import styles
import useStyles from '../styles';

const Calculator = () => {
	const classes = useStyles();
	return (
		<div className='calculatorContainer'>
			<h4 className='uiDesign'>UI Design</h4>
			<p className="calc-description">
				The focus when building this calculator was on the design. The idea was simply to implement the dark mode switch functionality.
			</p>
			<p className="calc-description">Visit here: <a href="https://mrjlancaster.github.io/calculator-darkmode/" target="blank">https://mrjlancaster.github.io/calculator-darkmode/</a></p>
		
			<div className='top-container'>
				<div className="calculator_heading1-container">
					<h2 className="calc_mode-heading">
						Light <br />
						Mode
					</h2>
				</div>
				<div className="blue_calculator-container">
					<img src={BlueCalculator} alt="calculator" className='blue_calculator' />
				</div>
			</div>
			<div className='bottom-container'>
				<div className="dark_calculator-container">
					<img src={DarkCalculator} alt="calculator" className='dark_calculator' />
				</div>
				<div className="calculator_heading2-container">
					<h2 className="calc_mode-heading">Dark Mode</h2>
					<p className='darkModeText'>
						The technologies I used here were <b>HTML5, CSS3, JavaScript, and Photoshop.</b> A lot of <span className={classes.ifStatements}>if statements</span> to get this done. Very straight forward.
					</p>
				</div>
				
			</div>
		</div>
	)
}

export default Calculator;
