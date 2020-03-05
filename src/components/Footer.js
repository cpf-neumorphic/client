import React from "react";

import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Footer = styled.footer`
	background: #3d4443;
	color: white;
	text-align: center;
	padding: 4rem 0;
`;

const FooterTitle = styled.h4``;

const FooterItem = styled.span`
	margin: 0 10px;
`;

export default props => {
	const title = "CPF Board";
	const items = ["Sitemap", "About", "Contact Us", "Feedback", "FAQ"];

	return (
		<Footer>
			<Container>
				<FooterTitle>{title}</FooterTitle>
				{items.map(item => (
					<FooterItem>{item}</FooterItem>
				))}
			</Container>
		</Footer>
	);
};
