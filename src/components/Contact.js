import React from "react";
import "./Contact.css";

const Contact = () => {
	const contactInfo = {
		email: "lancast001@gmail.com",
		tel: "+17739919846",
		linkedIn: "https://www.linkedin.com/in/mrjlancaster",
		github: "https://github.com/mrjlancaster",
	};

	return (
		<div id="contact" className="contactBox">
			<h2 className="contactTitle">Get in touch</h2>
			<div className="contact_info-wrapper">
				<a href={"tel:" + contactInfo.tel} className="contact-number">
					<i className="fas fa-phone-alt"></i> +1 (773)-991-9846
				</a>
				<a href={"mailto: " + contactInfo.email} className="contact-email">
					<i className="far fa-envelope"></i> {contactInfo.email}
				</a>
			</div>
			<div className="contact_social-icons">
				<a
					href={contactInfo.github}
					target="_blank"
					className="contact_socialLinks"
				>
					<i className="fab fa-github"></i>
				</a>
				<a
					href={contactInfo.linkedIn}
					target="_blank"
					className="contact_socialLinks"
				>
					<i className="fab fa-linkedin-in"></i>
				</a>
			</div>
		</div>
	);
};

export default Contact;
