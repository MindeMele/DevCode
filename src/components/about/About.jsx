import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/mindaugas-CV.pdf";
import Info from "./Info";
import FileSVG from "../../assets/files.svg";

const About = () => {
	return (
		<section className="about section" id="about">
			<h2 className="section__title">About Me</h2>
			<span className="section__subtitle">My introduction</span>
			<div className="about__container container grid">
				<img src={AboutImg} alt="Profile" className="about__img" />
				<div className="about__data">
					<Info />
					<p className="about__description">
						I am a talented and creative web developer with two
						years of experience, specializing in front-end and
						back-end development. Based in Kaunas, I excel in
						WordPress, leveraging its capabilities to create dynamic
						and customizable websites. With meticulous attention to
						detail and a passion for delivering high-quality
						solutions, I ensure optimal user experiences in every
						project I undertake.
					</p>
					<a download="" href={CV} className="button button--flex">
						Download CV
						<img src={FileSVG} alt="File" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
