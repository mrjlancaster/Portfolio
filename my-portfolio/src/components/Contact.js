import React from 'react';

// Material UI imports
import useStyles from '../styles';


function Contact() {

	const classes = useStyles();

	return (
		<div className={classes.contactBox}>
			<h1 className={classes.contactTitle}>
				I'm Available For Work
			</h1>
			<p variant="Outlined" className={classes.contactButton}>
				Get in touch
			</p>
		</div>
	)
}

export default Contact;
