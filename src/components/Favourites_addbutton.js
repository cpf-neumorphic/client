import React, { Component } from "react";
import { Button, Col, Row, Container, Modal } from "react-bootstrap";
import Favourites_card from "./Favourites_card";
import { IoIosAddCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import styled from "styled-components";
import Popup from "reactjs-popup";
import Favourites_addon from "./Favourites_addon";

const Add_Button = styled(Button)`
  background-color: gray;
  border-radius: 100%;
`;

const Container_ = styled(Container)`
  // border-style: solid;
  height: 300px;
  // padding-top: 50px;
  // padding-right: 50px;
  // padding-bottom: 50px;
  // padding-left: 50px;
  padding: 40%;
  text-align: center;
`;

const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
  }
  // use your custom style for ".popup-content"
  &-content {
    width: 100%;
    height: 80%;
  }
`;

function Favourites_addbutton(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const { Items, data } = props;
  console.log(Items);
  return (
    <Col sm={4}>
      <Container_>
        <Add_Button variant="secondary" onClick={() => setModalShow(true)}>
          <IconContext.Provider value={{ size: "45px", color: "white" }}>
            <IoIosAddCircle />
          </IconContext.Provider>
        </Add_Button>
        <Favourites_addon
          Items={Items}
          data={data}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container_>
    </Col>
  );
}

export default Favourites_addbutton;
