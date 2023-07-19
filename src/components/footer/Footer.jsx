import React from "react";
import "./footer.css";

const Footer = () => {
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		section.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">.DevCode</h1>
				<ul className="footer__list">
					<li>
						<button
							className="footer__link"
							onClick={() => scrollToSection("about")}>
							About
						</button>
					</li>
					<li>
						<button
							className="footer__link"
							onClick={() => scrollToSection("portfolio")}>
							Projects
						</button>
					</li>
					<li>
						<button
							className="footer__link"
							onClick={() => scrollToSection("testimonials")}>
							Testimonials
						</button>
					</li>
				</ul>
				<div className="footer__social">
					<a
						href="https://www.linkedin.com/in/mindaugas-mel%C4%97%C5%A1is/"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer">
						<i className="bx bxl-linkedin"></i>
					</a>
					<a
						href="https://www.facebook.com/mindaugas.melesis/"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer">
						<i className="bx bxl-facebook"></i>
					</a>
					<a
						href="https://www.instagram.com/_mindiss/"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer">
						<i className="bx bxl-instagram"></i>
					</a>
				</div>
				<span className="footer__copy">
					&#169; DevCode. All rights reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
