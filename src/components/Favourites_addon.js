import React, { useState } from "react";
import { Row, Modal, Button, Col, Container } from "react-bootstrap";
import Favourites_card from "./Favourites_card";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import "./Addon.css";

const StyledButton = styled(Button)`
   {
    // border-style: solid;
    //   text-align: left;
    // margin-top: 50px;
    height: 280px;
    width: 100%;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    padding-top: 50px;
  }
`;

const Mobile_StyledButton = styled(StyledButton)`
   {
    height: 200px;
  }
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
    <div>
      {/* Desktop */}
      <div>
        {isDesktopOrLaptop && (
          <Modal {...props} dialogClassName="desktop_modalconfig" centered>
            <Modal.Header closeButton>
              <Modal.Title>Add Favourites</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row className="m-2">
                  {tempFavourites.Favourites.map(Favourite =>
                    Favourite.status ? (
                      <Col sm={4} key={Favourite.id}>
                        <StyledButton
                          bsPrefix="styledButton-green"
                          // className="background"
                          // variant="info"
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
                      <Col sm={4} key={Favourite.id}>
                        <StyledButton
                          bsPrefix="styledButton-gray"
                          // variant="light"
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
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => saveChanges(props, tempFavourites, data)}>
                Save Change
              </Button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
      {/* Mobile */}
      <div>
        {isTabletOrMobileDevice && (
          <Modal {...props} dialogClassName="mobile_modalconfig" centered>
            <Modal.Header closeButton>
              <Modal.Title>Add Favourites</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row-overflow">
                {tempFavourites.Favourites.map(Favourite =>
                  Favourite.status ? (
                    <Mobile_StyledButton
                      bsPrefix="moblie_styledbutton-green"
                      onClick={() =>
                        changStats(
                          tempFavourites,
                          setTempFavourites,
                          Favourite.id
                        )
                      }
                    >
                      <Favourites_card data={Favourite} size={"30%"} />
                    </Mobile_StyledButton>
                  ) : (
                    <Mobile_StyledButton
                      bsPrefix="moblie_styledbutton-gray"
                      onClick={() =>
                        changStats(
                          tempFavourites,
                          setTempFavourites,
                          Favourite.id
                        )
                      }
                    >
                      <Favourites_card data={Favourite} size={"30%"} />
                    </Mobile_StyledButton>
                  )
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => saveChanges(props, tempFavourites, data)}>
                Save Change
              </Button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Favourites_addon;
