import React from "react";

const WorkItems = ({ item }) => {
	return (
		<div className="work__card" key={item.id}>
			<div className="work__hashtags">
				{item.hashtags.map((link, idx) => {
					return <p key={idx}>{link}</p>;
				})}
			</div>
			<img src={item.image} alt="ProjectImage" className="work__img" />
			<h3 className="work__title">{item.title}</h3>
			<a
				href={item.link}
				target="_blank"
				rel="noreferrer noopener"
				className="work__button">
				View Project
				<i className="bx bx-right-arrow-alt work__button-icon"></i>
			</a>
		</div>
	);
};

export default WorkItems;
