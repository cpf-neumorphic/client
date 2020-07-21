import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { UserContext } from "../contexts/UserContext";

import CPFLogo from "../img/cpf-logo.png";

const Nav = styled.nav`
  background-color: white;
  height: 80px;
`;

const Menu = styled.div`
  margin-left: auto;
`;

export default (props) => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div class="sgds-masthead">
        <Container>
          <a href="https://www.gov.sg" target="_blank">
            <span class="sgds-icon sgds-icon-sg-crest"></span>
            <span class="is-text">A Singapore Government Agency Website</span>
          </a>
        </Container>
      </div>
      <Nav>
        <Container className="h-100 d-flex align-items-center">
          <Link to="/">
            <img src={CPFLogo} alt="CPFB Logo" style={{ height: "60px" }} />
          </Link>
          <Menu>
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} className="mr-3" />
              {currentUser.name}
            </Link>
          </Menu>
        </Container>
      </Nav>
    </>
  );
};
