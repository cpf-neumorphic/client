import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import CPFLogo from "../img/cpf-logo.png";

const Nav = styled.nav`
	background-color: white;
`;

const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
`;

export default props => {
	const name = props.name || "Adam";

	return (
		<Nav>
			<Container className="d-flex">
				<div>
					<Link to="/">
						<img src={CPFLogo} alt="CPFB Logo" style={{ height: "60px" }} />
					</Link>
				</div>
				<div className="d-flex ml-auto">
					<StyledLink to="#" className="py-3 px-2">
						<FontAwesomeIcon icon={faUser} className="mr-3" />
						{name}
					</StyledLink>
				</div>
			</Container>
		</Nav>
	);
};
