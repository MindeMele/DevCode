import React, { useState } from "react";
import QualificationContent from "./QualificationContent";
import "./qualification.css";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(0);
	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className="qualification section" id="qualification">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My personal journey</span>
			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 1
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(1)}>
						<i className="uil uil-graduation-cap qualification__icon"></i>
						Education
					</div>
					<div
						className={
							toggleState === 2
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(2)}>
						<i className="uil uil-briefcase-alt qualification__icon"></i>
						Experience
					</div>
				</div>
				<div className="qualification__sections">
					<QualificationContent toggle={toggleState} />
				</div>
			</div>
		</section>
	);
};

export default Qualification;
