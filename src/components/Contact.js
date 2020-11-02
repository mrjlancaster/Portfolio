import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {

	const [email] = useState({
		email: 'lancast001@gmail.com'
	});

	return (
		<div id="contact" className='contactBox'>
			<h2 className='contactTitle'>
				I'm Available For Work
			</h2>
			<a href={'mailto: ' + email.email} className='contactButton'>
				Get in touch
			</a>
		</div>
	)
}

export default Contact;
