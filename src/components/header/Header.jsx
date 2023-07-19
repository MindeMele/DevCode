import React, { useState } from "react";
import "./header.css";

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		section.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<header className="header">
			<nav className="nav container">
				<a href="index.html" className="nav__logo">
					.DevCode
				</a>

				<div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
					<ul className="nav__list grid">
						<li className="nav__item">
							<button
								className="nav__link active-link"
								onClick={() => scrollToSection("home")}>
								<i className="uil uil-estate nav__icon"></i>
								Home
							</button>
						</li>
						<li className="nav__item">
							<button
								className="nav__link"
								onClick={() => scrollToSection("about")}>
								<i className="uil uil-user nav__icon"></i>
								About
							</button>
						</li>
						<li className="nav__item">
							<button
								className="nav__link"
								onClick={() => scrollToSection("skills")}>
								<i className="uil uil-file-alt nav__icon"></i>
								Skills
							</button>
						</li>
						<li className="nav__item">
							<button
								className="nav__link"
								onClick={() => scrollToSection("services")}>
								<i className="uil uil-briefcase-alt nav__icon"></i>
								Services
							</button>
						</li>
						<li className="nav__item">
							<button
								className="nav__link"
								onClick={() =>
									scrollToSection("qualification")
								}>
								<i className="uil uil-cloud-database-tree nav__icon"></i>
								Qualification
							</button>
						</li>
						<li className="nav__item">
							<button
								className="nav__link"
								onClick={() => scrollToSection("portfolio")}>
								<i className="uil uil-scenery nav__icon"></i>
								Portfolio
							</button>
						</li>
						<li className="nav__item">
							<button
								className="nav__link"
								onClick={() => scrollToSection("contact")}>
								<i className="uil uil-message nav__icon"></i>
								Contact
							</button>
						</li>
					</ul>
					<i
						className="uil uil-times nav__close"
						onClick={() => setToggle(!toggle)}></i>
				</div>
				<div className="nav__toggle" onClick={() => setToggle(!toggle)}>
					<i className="uil uil-apps"></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
