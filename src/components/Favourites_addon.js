import React, { useState } from "react";
import { Row, Modal, Button, Col, Container } from "react-bootstrap";
import Favourites_card from "./Favourites_card";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import "./Addon.css";

const StyledButton = styled(Button)`
  // border-style: solid;
  height: 300px;
  width: 100%;
  // margin-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-top: 50px;
  //   text-align: left;
`;

function saveChanges(props, items, setState) {
  setState(items);
  console.log("enter");
  props.onHide();
}

function changStats(props, setState, Favourite) {
  setState(props => ({
    Favourites: props.Favourites.map(el =>
      el.id === Favourite ? { ...el, status: !el.status } : el
    )
  }));
  console.log(props.Favourite);
  console.log(Favourite);
  return;
}

function Favourites_addon(props) {
  const { Items, data } = props;
  const [tempFavourites, setTempFavourites] = useState(Items);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)"
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 600px)"
  });
  console.log(Items);
  return (
    <Modal {...props} dialogClassName="modal-90w" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Favourites</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="m-2">
          {isDesktopOrLaptop && (
            <Row>
              {tempFavourites.Favourites.map(Favourite =>
                Favourite.status ? (
                  <Col sm={4}>
                    <StyledButton
                      variant="success"
                      onClick={() =>
                        changStats(
                          tempFavourites,
                          setTempFavourites,
                          Favourite.id
                        )
                      }
                    >
                      <Favourites_card data={Favourite} size={"20%"} />
                    </StyledButton>
                  </Col>
                ) : (
                  <Col sm={4}>
                    <StyledButton
                      variant="light"
                      onClick={() =>
                        changStats(
                          tempFavourites,
                          setTempFavourites,
                          Favourite.id
                        )
                      }
                    >
                      <Favourites_card data={Favourite} size={"20%"} />
                    </StyledButton>
                  </Col>
                )
              )}
            </Row>
          )}
          {isTabletOrMobileDevice && (
            <div className="row-overflow">
              {tempFavourites.Favourites.map(Favourite =>
                Favourite.status ? (
                  <StyledButton
                    id="x"
                    variant="success"
                    onClick={() =>
                      changStats(
                        tempFavourites,
                        setTempFavourites,
                        Favourite.id
                      )
                    }
                  >
                    <Favourites_card data={Favourite} size={"30%"} />
                  </StyledButton>
                ) : (
                  <StyledButton
                    id="x"
                    variant="light"
                    onClick={() =>
                      changStats(
                        tempFavourites,
                        setTempFavourites,
                        Favourite.id
                      )
                    }
                  >
                    <Favourites_card data={Favourite} size={"30%"} />
                  </StyledButton>
                )
              )}
            </div>
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => saveChanges(props, tempFavourites, data)}>
          Save Change
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Favourites_addon;
