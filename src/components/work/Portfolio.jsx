import React from "react";
import WorksData from "./WorksData";
import WorkItems from "./WorkItems";

const Works = () => {
	return (
		<div className="work__container container grid">
			{WorksData.map((item) => {
				return <WorkItems item={item} key={item.id} />;
			})}
		</div>
	);
};

export default Works;
