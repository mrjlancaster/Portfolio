import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {

	const [email] = useState({
		email: 'lancast001@gmail.com'
	});

	return (
		<div id="contact" className='contactBox'>
			<h2 className='contactTitle'>
				Get in touch
			</h2>
			<div className="contact_info-wrapper">
				<a href="tel:+17739919846" className="contact-number"><i class="fas fa-phone-alt"></i> +1 (773)-991-9846</a>
				<a href={'mailto: ' + email.email} className='contact-email'>
				<i class="far fa-envelope"></i> lancast001@gmail.com
				</a>
			</div>
			<div className="social-icons">
				<a href="https://github.com/mrjlancaster" target="_blank" className="socialLinks">
					<i className="fab fa-github"></i>
				</a>
				<a href="https://www.linkedin.com/in/mrjlancaster" target="_blank" className="socialLinks">
					<i className="fab fa-linkedin-in"></i>
				</a>
			</div>
		</div>
	)
}

export default Contact;
