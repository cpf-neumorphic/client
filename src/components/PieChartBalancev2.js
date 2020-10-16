import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  @media (max-width: 531px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
`;

const Wrapper2 = styled.div`
  display: grid;
  justify-items: left;
  align-items: center;
  grid-template-columns: 30px auto;
  padding-bottom: 10px;
`;

export default function PieChartBalancev2(props) {
  const { OA, SA, MA } = props.data;
  const total = OA + SA + MA;
  const header = [{ total: total }];

  const data = [
    {
      color: "#30e3ca",
      title: "Ordinary Account",
      value: OA,
    },
    {
      color: "#11999e",
      title: "Special Account",
      value: SA,
    },
    {
      color: "#40514e",
      title: "MediSave Account",
      value: MA,
    },
  ];

  return (
    <MainWrapper>
      <h2
        style={{
          margin: "0px",
        }}
      >
        Account Summary
      </h2>

      <Wrapper>
        <div>
          <PieChart
            style={{
              fontSize: "10px",
            }}
            data={data}
            radius={PieChart.defaultProps.radius - 6}
            lineWidth={20}
            segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
            // segmentsShift={(index) => (index === selected ? 6 : 1)}
            animate
            label={({ dataEntry }) =>
              "$" +
              dataEntry.value.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            }
            labelPosition={112}
            labelStyle={{
              fill: "#000",
            }}
            viewBoxSize={[180, 180]}
            center={[90, 90]}
          >
            <PieChart
              data={header}
              lineWidth={0}
              label={({ dataEntry }) =>
                "$" +
                dataEntry.total.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              }
              labelPosition={100}
              viewBoxSize={[150, 150]}
              center={[75, 75]}
            />
          </PieChart>
        </div>
        <div>
          {data.map((data, i) => {
            return (
              <Wrapper2 key={i}>
                <div
                  style={{
                    background: data.color,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                  }}
                ></div>
                <div>{data.title}</div>
              </Wrapper2>
            );
          })}
        </div>
      </Wrapper>
    </MainWrapper>
  );
}
