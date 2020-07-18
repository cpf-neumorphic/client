import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DemoPage = (props) => {
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

DemoPage.defaultProps = {
  title: "Demo Page Title",
  description: "This is a demo page.",
};

DemoPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DemoPage;

const LandingGreen = styled.div`
  padding: 30px 0;
  text-align: center;

  background: #e4f9f5;
`;
