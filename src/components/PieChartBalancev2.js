import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  // justify-items: center;
  // align-items: center;
  grid-template-rows: auto auto auto;
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
  const [activeIndex, setActiveIndex] = useState(0);

  // const data = [
  //   { name: "Ordinary Account", value: OA },
  //   { name: "Special Account", value: SA },
  //   { name: "MediSave Account", value: MA },
  // ];
  const header = [{ total: total }];
  const data = [
    {
      color: "#FFFFFF",
      title: "Ordinary Account",
      value: OA,
    },
    {
      color: "#AAFFF3",
      title: "Special Account",
      value: SA,
    },
    {
      color: "#30E3CA",
      title: "MediSave Account",
      value: MA,
    },
  ];

  // const [selected, setSelected] = useState(0);
  // const [hovered, setHovered] = useState(undefined);

  // const data = datas.map((entry, i) => {
  //   if (hovered === i) {
  //     return {
  //       ...entry,
  //       color: "grey",
  //     };
  //   }
  //   return entry;
  // });

  return (
    <div>
      <h2
        style={{
          color: "#fff",
          margin: "0px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        Account Summary
      </h2>
      <PieChart
        style={{
          fontFamily: "Quicksand",
          fontSize: "8px",
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
          fill: "#fff",
        }}
        viewBoxSize={[180, 180]}
        center={[90, 90]}
      >
        <PieChart
          style={{
            fontFamily: "Quicksand",
            fill: "#fff",
          }}
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
      <Wrapper>
        {data.map((data) => {
          return (
            <Wrapper2>
              <div
                style={{
                  background: data.color,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }}
              ></div>
              <div style={{ color: "#fff", fontSize: "80%" }}>{data.title}</div>
            </Wrapper2>
          );
        })}
      </Wrapper>
    </div>
  );
}
