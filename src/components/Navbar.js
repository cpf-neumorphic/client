import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import CPFLogo from "../img/cpf-logo.png";

const Nav = styled.nav`
	background-color: white;
	height: 80px;
`;

const Menu = styled.div`
	margin-left: auto;
`;

export default props => {
	const name = props.name || "Adam";

	return (
		<Nav>
			<Container className="h-100 d-flex align-items-center">
				<Link to="/">
					<img src={CPFLogo} alt="CPFB Logo" style={{ height: "60px" }} />
				</Link>
				<Menu>
					<Link to="#">
						<FontAwesomeIcon icon={faUser} className="mr-3" />
						{name}
					</Link>
				</Menu>
			</Container>
		</Nav>
	);
};
