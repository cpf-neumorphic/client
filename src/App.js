import React, { useState } from "react";
import Favourites_card from "./components/Favourites_card";
import Favourites_addbutton from "./components/Favourites_addbutton";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .logo {
    align: left;
    height: 64px;
    width: 64px;
  }
  ,
  .container1 {
    background: white;
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 80px;
    width: 200px;
    // border-style: solid;
    //   padding: 4em;
  }
  ,
  .round {
    background-color: white;
    // border: none;
    // color: white;
    // padding: 20px;
    // display: inline-block;
    // margin: 4px 2px;
    border-radius: 50%;
  }
`;
function App() {
  const [item, setItems] = useState([
    {
      icon: "FaHome",
      header: "CPF HOUSING Usage",
      description: "Description hello mother fucker"
    },
    {
      icon: "FaCalculator",
      header: "Mortgage Calculator",
      description: "Description hello mother fucker"
    }
  ]);

  return (
    <Styles>
      <Container>
        <Row>
          {item.map(item => (
            <Container className="container1">
              <Favourites_card data={item} />
            </Container>
          ))}
        </Row>
        <Favourites_addbutton set={item} />
      </Container>
    </Styles>
  );
}

export default App;
