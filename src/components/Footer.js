import React from "react";
import { Link } from "@material-ui/core";

const contact = {
	email: "lancast001@gmail.com",
	phone: "+17739919846",
};

const social = [
	{
		link: "https://github.com/mrjlancaster",
		iconClassname: "fab fa-github",
	},
	{
		link: "https://www.linkedin.com/in/mrjlancaster",
		iconClassname: "fab fa-linkedin-in",
	},
];

const Footer = () => {
	return (
		<div id="contact" className="contactBox">
			<h2 className="contactTitle">Get in touch</h2>
			<div className="contact_info-wrapper">
				<a href={`tel:${contact.phone}`} className="contact-number">
					<i className="fas fa-phone-alt"></i> +1 (773)-991-9846
				</a>
				<a href={"mailto: " + contact.email} className="contact-email">
					<i className="far fa-envelope"></i> {contact.email}
				</a>
			</div>
			<div className="contact_social-icons">
				{social.map((item) => {
					return (
						<Link
							href={item.link}
							target="_blank"
							className="contact_socialLinks"
							rel="noreferrer"
							color="white"
						>
							<i className={item.iconClassname}></i>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Footer;
