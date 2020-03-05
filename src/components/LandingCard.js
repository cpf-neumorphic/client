import React from "react";
import styled from "styled-components";

// This could be react-router-dom's Link for example
const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);
const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

export default props => {
  return (
    <>
      Landing Card
      <div>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
      </div>
    </>
  );
};
