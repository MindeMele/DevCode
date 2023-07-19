import React, { useState } from "react";

const ServicesComponent = ({
	title,
	services,
	secondTitle,
	iconName,
	description,
}) => {
	const [toggleState, setToggleState] = useState(0);
	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div className="services__content">
			<div>
				<i className={iconName}></i>
				<h3
					className="services__title"
					dangerouslySetInnerHTML={{ __html: title }}></h3>
			</div>
			<span className="services__button" onClick={() => toggleTab(1)}>
				View More
				<i className="uil uil-arrow-right services__button-icon"></i>
			</span>
			<div
				className={
					toggleState === 1
						? "services__modal active-modal"
						: "services__modal"
				}>
				<div className="services__modal-content">
					<i
						className="uil uil-times services__modal-close"
						onClick={() => toggleTab(0)}></i>
					<h3 className="services__modal-title">{secondTitle}</h3>
					<p className="services__modal-description">{description}</p>
					<ul className="services__modal-services grid">
						{services.map((service, index) => (
							<li className="services__modal-service" key={index}>
								<i className="uil uil-check-circle services__modal-icon"></i>
								<p className="services__modal-info">
									{service}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ServicesComponent;
