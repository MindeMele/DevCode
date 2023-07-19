import React from "react";
import SendSvg from "../../assets/send.svg";

const Data = () => {
	return (
		<div className="home__data">
			<h1 className="home__title">Mindaugas Melėšis</h1>
			<h3 className="home__subtitle">Web Developer</h3>
			<p className="home__description">
				I'm a creative Full Stack developer based in Kaunas,
				specializing in web development. With a strong focus on
				WordPress, ReactJS, and Laravel, I bring expertise in both
				front-end and back-end development. Currently working as a
				FrontEnd developer, I also freelance in my free time, delivering
				dynamic and engaging web solutions tailored to client needs.
			</p>
			<a href="#contact" className="button button--flex">
				Say Hello
				<img src={SendSvg} alt="Send" />
			</a>
		</div>
	);
};

export default Data;
