import React from "react";
import styled from "styled-components";
import * as FAIcon from "react-icons/fa";

export default (props) => {
  return (
    <>
      <Wrapper onClick={props.onClick}>
        <IconContainer>{React.createElement(FAIcon[props.icon])}</IconContainer>
        <Card>
          <Header>{props.header}</Header>
          <Text>{props.text}</Text>
        </Card>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  height: 70px;
  width: 70px;
  margin-top: 15px;
  margin-bottom: -37px;
  z-index: 1;
  font-size: 36px;
  text-align: center;
  justify-content: center;
  line-height: 60px;

  color: #ffffff;
  border-radius: 40px;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
  background: linear-gradient(315deg, #11999e, #89eff2);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 200px;
  width: 280px;
  padding: 20px;
  border-radius: 40px;
  overflow: hidden;

  box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.15);
  transition: box-shadow 0.5s ease-out;
  background: #ffffff;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.5);
  }
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
  text-align: center;
  width: auto;
  max-width: 100%;
  justify-content: center;
`;
