import React from "react";
import QualificationData from "./QualificationData";

const QualificationContent = ({ toggle }) => {
	// Destructure the toggle prop
	return (
		<div>
			{QualificationData.map((qualificationGroup, index) => (
				<div
					key={index}
					className={
						index + 1 === toggle
							? "qualification__content qualification__content-active"
							: "qualification__content"
					}>
					{qualificationGroup.map((component, id) => (
						<div key={id} className="qualification__data">
							{component.left && (
								<>
									<div></div>
									<div>
										<span className="qualification__rounder"></span>
										<span className="qualification__line"></span>
									</div>
								</>
							)}
							<div>
								<h3 className="qualification__title">
									{component.title}
								</h3>
								<span className="qualification__subtitle">
									{component.subTitle}
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i>
									{component.calendar}
								</div>
							</div>
							{!component.left && (
								<>
									<div>
										<span className="qualification__rounder"></span>
										<span className="qualification__line"></span>
									</div>
								</>
							)}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default QualificationContent;
