import React from 'react';
import './Calculator.css';

// import imgs
import LightMode from '../img/light-mode.png';
import DarkMode from '../img/dark-mode.png';

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
		
			<div className='leftBox'>
				<h2 className="calc_mode-heading">
					Light <br />
					Mode
				</h2>
				<img src={LightMode} alt="calculator" className='lightCalc' />
			</div>
			<div className='rightBox'>
				<img src={DarkMode} alt="calculator" className='calc' />
				<div>
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
