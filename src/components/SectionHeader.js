import React from "react";

export default props => {
	return (
		<div className="container">
			<h1>{props.header}</h1>
			<p className="mb-4">{props.text}</p>
		</div>
	);
};
