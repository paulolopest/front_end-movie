import React from 'react';
import { ReactComponent as LinkedinIcon } from '../../Assets/Icons/linkedin.svg';
import { ReactComponent as EmailIcon } from '../../Assets/Icons/mail.svg';
import { ReactComponent as GithubIcon } from '../../Assets/Icons/github.svg';

const Footer = () => {
	return (
		<div className="FooterComponent">
			<h3>Any rights reserved</h3>
			<ul className="footerLinks">
				<li>
					<div>
						<LinkedinIcon />
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/in/paulo-tarso-92bb0823a/"
						>
							Linkedin
						</a>
					</div>

					<div>
						<GithubIcon />
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/paulolopest"
						>
							GitHub
						</a>
					</div>

					<div>
						<EmailIcon />
						<a href="mailto:paulotarsogl@gmail.com">Email</a>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
