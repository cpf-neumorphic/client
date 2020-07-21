import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Scrollable = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [parent, setParent] = useState("div");

  /* Get window width */
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  /* Set component on width change */
  useEffect(() => {
    if (width > 1140) setParent(Container);
    else setParent("div");
  }, [width]);

  const ResponsiveScrollable = styled(parent)`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    align-items: center;

    /* Mobile horizontal scroll */
    @media (max-width: 1140px) {
      grid-auto-columns: minmax(300px, 1fr);
      grid-auto-flow: column;
      overflow-x: auto;
    }
  `;

  return <ResponsiveScrollable>{children}</ResponsiveScrollable>;
};

export default Scrollable;
