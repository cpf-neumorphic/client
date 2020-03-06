import React from "react";
import { Row, Modal, Button, Col, Container } from "react-bootstrap";
import * as MaterialDesign from "react-icons/fa";
import { IconContext } from "react-icons";
import Favourites_card from "./Favourites_card";
import styled from "styled-components";
import "./Addon.css";

const StyledButton = styled(Button)`
  // border-style: solid;
  height: 100%;
  //   padding-top: 10px;
  //   padding-right: 30px;
  //   padding-bottom: 50px;
  //   padding-left: 80px;
  //   padding: 50%;
  //   text-align: left;
`;

const StyledModal = styled(Modal)`
  // border-style: solid;
  width: 90%;
  max-width: 90% !important;
`;

function Favourites_addon(props) {
  const mainList = [
    {
      icon: "FaHome",
      header: "CPF HOUSING Usage",
      description: "Description hello mother fucker"
    },
    {
      icon: "FaCalculator",
      header: "Mortgage Calculator",
      description: "Description hello mother fucker"
    },
    {
      icon: "FaHome",
      header: "CPF HOUSING Usage",
      description: "Description hello mother fucker"
    }
  ];
  return (
    <Modal {...props} dialogClassName="modal-90w" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Favourites</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            {mainList.map(item => (
              <Col xs={6} md={4}>
                <StyledButton variant="light">
                  <Favourites_card data={item} size={"30%"} />
                </StyledButton>
              </Col>
            ))}
          </Row>
          <Row>
            {mainList.map(item => (
              <Col xs={6} md={4}>
                <StyledButton variant="light">
                  <Favourites_card data={item} size={"30%"} />
                </StyledButton>
              </Col>
            ))}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    //     <Container>
    //     <Row>
    //       {mainList.map(item => (
    //         <Col sm={4}>
    //           <StyledButton variant="light">
    //             <Favourites_card data={item} size={"100%"} />
    //           </StyledButton>
    //         </Col>
    //       ))}
    //     </Row>
    //   </Container>
    //     <Container>
    //       <Row>
    //         {mainList.map(item => (
    //           <Col sm={4}>
    //             <StyledButton variant="light">
    //               <Favourites_card data={item} size={"100%"} />
    //             </StyledButton>
    //           </Col>
    //         ))}
    //       </Row>
    //     </Container>
  );
}

export default Favourites_addon;
