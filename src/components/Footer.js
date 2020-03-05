import React from "react";

import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Footer = styled.footer`
	background: #3d4443;
	color: white;
	text-align: center;
	padding: 4rem 0;
`;

export default props => {
	const title = "CPF Board";
	const items = ["Sitemap", "About", "Contact Us", "Feedback", "FAQ"];

	return (
		<Footer>
			<Container>
				<h4>{title}</h4>
				{items.map(item => (
					<span className="mx-3" key={item}>
						{item}
					</span>
				))}
			</Container>
		</Footer>
	);
};
