import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function FavouritesCard(props) {
  const { OA, SA, MA } = props.data;
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let total = OA + SA + MA;
    let distribution = 100 / total;
    let percentage = [];
    percentage = percentage.concat(String(distribution * OA));
    percentage = percentage.concat(String(distribution * SA));
    percentage = percentage.concat(String(distribution * MA));
    console.log(percentage);

    setPercentage(percentage);
  }, [props]);

  console.log(
    (OA + SA + MA).toLocaleString(undefined, { maximumFractionDigits: 2 })
  );
  return (
    <MainWrapper>
      <HeaderWrapper>
        <Sub style={{ textAlign: "left" }}>
          <h4>Total balance</h4>
        </Sub>
        <Sub style={{ textAlign: "right" }}>
          <h2>
            $
            {(OA + SA + MA).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>
        </Sub>
      </HeaderWrapper>
      <BalanceBarWrapper>
        <BalanceBar
          style={{ backgroundColor: "#30E3CA", width: "100%" }}
        ></BalanceBar>
        <BalanceBar
          style={{
            backgroundColor: "#11999E",
            width: parseInt(percentage[1]) + parseInt(percentage[0]) + "%",
          }}
        ></BalanceBar>
        <BalanceBar
          style={{ backgroundColor: "#40514E", width: percentage[0] + "%" }}
        ></BalanceBar>
      </BalanceBarWrapper>
      <ContentWrapper>
        <Content>
          <Indicator style={{ backgroundColor: "#40514E" }}></Indicator>
          <div style={{ textAlign: "left" }}>
            <p>
              Ordinary Account (OA) <br /> $
              {OA.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </Content>
        <Content>
          <Indicator style={{ backgroundColor: "#11999E" }}></Indicator>
          <div style={{ textAlign: "left" }}>
            <p>
              Ordinary Account (OA) <br /> $
              {OA.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </Content>
        <Content>
          <Indicator style={{ backgroundColor: "#30E3CA" }}></Indicator>
          <div style={{ textAlign: "left" }}>
            <p>
              Ordinary Account (OA) <br /> $
              {OA.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </Content>
      </ContentWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
`;

const Sub = styled.div`
  justify-items: center;
  text-align: right;
`;

const BalanceBarWrapper = styled.div`
  height: 50px;
  width: 100%;
  position: relative;
`;

const BalanceBar = styled.div`
  border-radius: 25px;
  height: 50px;
  position: absolute;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  height: 100%;
  width: 100%;
  align-items: center;
`;

const Indicator = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;
