import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0);
  flex: 1;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  justify-content: center;
  margin: 0px 20px 0px 20px;
  width: 1100px;
  max-width: calc(100% - 40px);
`;

const Header = styled.h1`
  color: #333;
  font-family: Quicksand;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  height: auto;
  width: auto;
  max-width: 100%;
  //   text-align: center;
  //   justify-content: center;
`;

const Text = styled.p`
  color: #333;
  font-family: "Open Sans";
  font-size: 20px;
  font-weight: 400;
  height: auto;
  margin: 10px 0px 0px 0px;
  width: auto;
  max-width: 100%;
  //   text-align: center;
  //   justify-content: center;
`;

export default props => {
  return (
    <>
      <Wrapper>
        <Header>{props.header}</Header>
        <Text>{props.text}</Text>
      </Wrapper>
    </>
  );
};
