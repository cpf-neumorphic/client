import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Demo = (props) => {
  const { title, description } = props;

  return (
    <LandingGreen>
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </LandingGreen>
  );
};

Demo.defaultProps = {
  title: "Demo Page Title",
  description: "This is a demo page.",
};

Demo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Demo;

const LandingGreen = styled.div`
  padding: 30px 0;
  text-align: center;

  background: #e4f9f5;
`;
