import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import CPFLogo from "../img/cpf-logo.png";

const Nav = styled.nav`
	background-color: white;
`;

const Navbar = styled(Container)`
	display: flex;
`;

const NavItems = styled.div`
	display: flex;
	margin-left: auto;
`;

const Link = styled.a`
	padding: 15px 10px;
`;

export default props => {
	const name = props.name || "Adam";

	return (
		<Nav>
			<Navbar>
				<div>
					<img src={CPFLogo} alt="CPFB Logo" style={{ height: "60px" }} />
				</div>
				<NavItems>
					<Link>
						<FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
						{name}
					</Link>
				</NavItems>
			</Navbar>
		</Nav>
	);
};
