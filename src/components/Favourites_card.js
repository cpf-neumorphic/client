import React from "react";
import { Row, Container } from "react-bootstrap";
import * as MaterialDesign from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";
import "./test.css";

const IconContext_ = styled(IconContext)`
  // border-style: solid;
  align: center;
`;

function Favourites_card(props) {
  console.log(props);
  const { icon, header, description } = props.data;
  const mdIcon = MaterialDesign[icon];
  const size_ = props.size;
  console.log(size_);
  console.log({ mdIcon });
  return (
    <Container>
      <IconContext_.Provider value={{ color: "11999e", size: size_ }}>
        <Row>{React.createElement(mdIcon)}</Row>
      </IconContext_.Provider>
      <Row>
        <h4 className="title">{header}</h4>
      </Row>
      <Row>
        <p className="body">{description}</p>
      </Row>
    </Container>
  );
}

export default Favourites_card;
