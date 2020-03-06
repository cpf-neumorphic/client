import React, { useState } from "react";
import Favourites_card from "./components/Favourites_card";
import Favourites_addbutton from "./components/Favourites_addbutton";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const Container_ = styled(Container)`
  border-style: solid;
  height: 100%;
  width: 100%;
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
`;

function App() {
  const [items, setItems] = useState([
    {
      icon: "FaHome",
      header: "CPF HOUSING Usage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus."
    },
    {
      icon: "FaCalculator",
      header: "Mortgage Calculator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Wres bes awer."
    }
  ]);

  return (
    // <Styles>
    <Container>
      <Row>
        {items.map(item => (
          <Col sm={4}>
            <Container_>
              <Favourites_card data={item} size={"30%"} />
            </Container_>
          </Col>
        ))}
        <Favourites_addbutton data={setItems} />
      </Row>
    </Container>
    // </Styles>
  );
}

export default App;
