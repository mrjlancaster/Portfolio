import React, { useState } from 'react';

// Material UI imports
import { Typography } from '@material-ui/core';
import useStyles from '../styles';


const Contact = () => {

	const [email] = useState({
		email: 'lancast001@gmail.com'
	});

	const classes = useStyles();

	return (
		<div id="contact" className={classes.contactBox}>
			<Typography variant="h2" className={classes.contactTitle}>
				I'm Available For Work
			</Typography>
			<a href={'mailto: ' + email.email} variant="Outlined" className={classes.contactButton}>
				Get in touch
			</a>
		</div>
	)
}

export default Contact;
