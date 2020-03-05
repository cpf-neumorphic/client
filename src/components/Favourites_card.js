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
import * as MaterialDesign from "react-icons/fa";

class Favourites_card extends Component {
  render() {
    const { icon, header, description } = this.props.data;
    const mdIcon = MaterialDesign[icon];
    console.log(icon);
    console.log(mdIcon);
    return (
      <Col>
        <Row>{React.createElement(mdIcon)}</Row>
        <Row>
          <h1>{header}</h1>
        </Row>
        <Row>
          <p>{description}</p>
        </Row>
      </Col>
    );
  }
}

export default Favourites_card;
