import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DemoCategory = (props) => {
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

DemoCategory.defaultProps = {
  title: "Demo Category Title",
  description: "This is a demo page for each category.",
};

DemoCategory.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DemoCategory;

const LandingGreen = styled.div`
  padding: 30px 0;
  text-align: center;

  background: #e4f9f5;
`;
