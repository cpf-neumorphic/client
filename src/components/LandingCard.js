import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Zap } from "@styled-icons/octicons";

const Wrapper = styled.div`
  align-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  display: inline-flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  margin: 20px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 15px;
`;

const IconContainer = styled.div`
  align-content: center;
  align-items: center;
  background: linear-gradient(315deg, #11999e, #89eff2);
  border-radius: 40px;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
  display: inline-flex;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 70px;
  justify-content: center;
  margin-bottom: -35px;
  width: 70px;
  z-index: 10000;
  max-width: 100%;
  color: #ffffff;
  font-size: 36px;
`;

// const Icon = styled.i`
//   color: #ffffff;
//   font-size: 36px;
//   max-width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

const StyledIcon = styled(Zap)`
  width: 25px;
`;

const Card = styled.div`
  align-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 40px;
  box-shadow: 0px 5px 15px 0px rgba(70, 70, 70, 0.15);
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 200px;
  justify-content: center;
  margin: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 40px 20px 20px 20px;
  width: 280px;
  max-width: 100%;
  z-index: -10000;
`;

const Header = styled.h2`
  color: rgb(70, 70, 70);
  font-family: Quicksand;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  height: auto;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
`;

const Text = styled.p`
  color: rgb(70, 70, 70);
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  height: auto;
  margin: 10px 0px 0px 0px;
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
`;

export default props => {
  return (
    <>
      <Col>
        <Wrapper>
          <IconContainer>
            {/* <Icon> */}
            <StyledIcon></StyledIcon>
            {/* </Icon> */}
          </IconContainer>
          <Card>
            <br />
            <Header>{props.header}</Header>
            <Text>{props.text}</Text>
          </Card>
        </Wrapper>
      </Col>
    </>
  );
};
