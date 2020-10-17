import React from "react";
import styled from "styled-components";
import { PieChart } from "react-minimal-pie-chart";

const colorTitleMapping = {
  OA: { color: "#30e3ca", title: "Ordinary Account" },
  SA: { color: "#11999e", title: "Special Account" },
  MA: { color: "#40514e", title: "Medisave Account" },
};

export default (props) => {
  const { OA, SA, MA } = props.data;
  const total = OA + SA + MA;
  const header = [{ value: total }];

  const accountSummaryData = Object.keys(colorTitleMapping).map((key) => ({
    ...colorTitleMapping[key],
    value: props.data[key],
  }));

  return (
    <Card>
      <Header>Account Summary</Header>
      <Wrapper>
        <PieChart
          style={{
            fontSize: "9px",
            height: "290px",
            margin: "-30px auto",
          }}
          data={accountSummaryData}
          lineWidth={20}
          segmentsStyle={{ transition: "stroke .3s" }}
          label={({ dataEntry }) =>
            "$" +
            dataEntry.value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }
          labelPosition={110}
          viewBoxSize={[190, 190]}
          center={[90, 95]}
          animate
        >
          <PieChart
            style={{ fontWeight: "bold" }}
            data={header}
            lineWidth={0}
            label={({ dataEntry }) =>
              "$" +
              dataEntry.value.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            }
            // labelPosition={100}
            viewBoxSize={[190, 190]}
            center={[95, 95]}
          />
        </PieChart>
        <LegendWrapper>
          {Object.keys(colorTitleMapping).map((key, i) => (
            <Legend key={i}>
              <div
                style={{
                  background: colorTitleMapping[key].color,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }}
              ></div>
              <span>{colorTitleMapping[key].title}</span>
            </Legend>
          ))}
        </LegendWrapper>
      </Wrapper>
    </Card>
  );
};

const Card = styled.div`
  padding: 20px;
  padding-bottom: 0;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.15);

  @media (max-width: 531px) {
    margin-top: 20px;
    padding: 20px;
  }
`;

const Header = styled.h2`
  font-size: 25px;
  margin: 0;
`;

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  @media (max-width: 531px) {
    grid-auto-flow: row;
  }
`;

const LegendWrapper = styled.div`
  display: grid;
  gap: 8px;
  font-size: small;
  align-content: center;

  @media (max-width: 531px) {
    justify-content: center;
  }
`;

const Legend = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: left;
  gap: 10px;
`;
