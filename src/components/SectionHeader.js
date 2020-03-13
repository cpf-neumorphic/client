import React from "react";

export default props => {
	return (
		<>
			<h1>{props.header}</h1>
			<p className="mb-4">{props.text}</p>
		</>
	);
};
