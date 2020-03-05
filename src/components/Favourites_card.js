import React, { Component } from "react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  ButtonToolbar,
  Button,
  Image
} from "react-bootstrap";
import { FaHome } from "react-icons/fa";

const Styles = styled.div`
  .logo {
    align: left;
    height: 64px;
    width: 64px;
  }
  ,
  .container {
    padding: 4em;
    background: papayawhip;
    height: auto;
    width: 200px;
  }
  .title {
  }
`;
const props = {
  icon: "FaHome",
  header: "CPF HOUSING Usage",
  description: "Description hello mother fucker"
};
const Favourites_card = () => {
  return (
    <Container>
      <Styles>
        <Row>
          <FaHome className="logo" />
        </Row>
        <Row>
          <h1>{props.header}</h1>
        </Row>
        <Row>
          <p>{props.description}</p>
        </Row>
      </Styles>
    </Container>
  );
};

export default Favourites_card;
