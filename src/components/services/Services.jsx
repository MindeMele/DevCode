import React from "react";
import "./services.css";
import ServicesComponent from "./ServicesComponent";
import ServicesData from "./ServicesData";

const Services = () => {
	return (
		<section className="services section" id="services">
			<h2 className="section__title">Services</h2>
			<span className="section__subtitle">What I offer</span>

			<div className="services__container container grid">
				{ServicesData.map((component, index) => (
					<ServicesComponent
						key={index}
						title={component.title}
						services={component.services}
						secondTitle={component.secondTitle}
						iconName={component.iconName}
						description={component.description}
					/>
				))}
			</div>
		</section>
	);
};

export default Services;
