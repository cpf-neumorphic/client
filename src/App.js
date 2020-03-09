import React, { useState } from "react";
import Favourites_card from "./components/Favourites_card";
import Favourites_addbutton from "./components/Favourites_addbutton";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import "./index.css";

const Button_ = styled(Button)`
  // border-style: solid;
  height: 310px;
  width: 300px;
  padding-top: 50px;
  padding-right: 70px;
  padding-bottom: 50px;
  padding-left: 70px;
  border-radius: 10%;
  // overflow-y: hidden;
  display: flex;
`;

function App() {
  let userFavourites = [];
  let rows = 0;
  let productRows = [];
  let buttoStatus = true;

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)"
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 600px)"
  });

  const getUserFavourites = props => {
    userFavourites = [];
    rows = 0;
    productRows = [];
    console.log(props.Favourites);

    props.Favourites.map(Favourite =>
      Favourite.status ? userFavourites.push(Favourite) : ""
    );
    rows = [...Array(Math.ceil(userFavourites.length / 3))];
    productRows = rows.map((row, idx) =>
      userFavourites.slice(idx * 3, idx * 3 + 3)
    );
    // productRows.map(row => console.log(row));
    // return productRows;
  };

  const [Items, setItems] = useState({
    Favourites: require("./asset/List_of_favourites.json")
  });

  console.log(Items.Favourites);

  return (
    // <Styles>

    <Container>
      {getUserFavourites(Items)}
      <Row>
        <h1>Favourites </h1>
      </Row>
      <Row>
        <p>You mostly used these </p>
      </Row>

      {isDesktopOrLaptop && (
        <div>
          {productRows.map((row, idx) => (
            <Row className="m-4">
              {row.map(Favourite => (
                <Col sm={4}>
                  <Button_ variant="light" className="shadow-sm m-1">
                    <Favourites_card data={Favourite} size={"30%"} />
                  </Button_>
                </Col>
              ))}
              {productRows.length === idx + 1 ? (
                <Favourites_addbutton data={setItems} Items={Items} />
              ) : (
                ""
              )}
            </Row>
          ))}
          {productRows.length === 0 ? (
            <Favourites_addbutton data={setItems} Items={Items} />
          ) : (
            ""
          )}
        </div>
      )}
      {isTabletOrMobileDevice && (
        <div className="phoneconfig">
          {userFavourites.map(Favourite => (
            <Button_ variant="light" className="shadow-sm m-1">
              <Favourites_card data={Favourite} size={"30%"} />
            </Button_>
          ))}
          <div className="phoneAddbutton">
            <Favourites_addbutton data={setItems} Items={Items} />
          </div>
          {/* 
          <Favourites_addbutton data={setItems} Items={Items} /> */}
        </div>
      )}
    </Container>
    // </Styles>
  );
}

export default App;
