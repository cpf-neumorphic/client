import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Scrollable = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  /* Get window width */
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width > 1140 ? (
    <ScrollableContainer>{children}</ScrollableContainer>
  ) : (
    <ScrollableDiv>{children}</ScrollableDiv>
  );
};

/* Bounded by Container */
const ScrollableContainer = styled(Container)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  align-items: center;
`;

/* Not bounded by Container */
const ScrollableDiv = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;

  grid-auto-columns: minmax(300px, 1fr);
  grid-auto-flow: column;
  overflow-x: auto;
`;

export default Scrollable;
