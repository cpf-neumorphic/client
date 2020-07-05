import React from "react";
import * as FAIcon from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { getAllPageInfor } from "../asset/pages";

const defaults = getAllPageInfor()[0];

export default function FavouritesCard(props) {
  const { pageIcon, pageTitle, pageDescription } = props.data || defaults;
  const selected = props.selected || false;
  const handleClick = props.onClick;

  return (
    <Wrapper onClick={handleClick}>
      <Card selected={selected}>
        <IconContext.Provider value={{ color: "11999e", size: "64px" }}>
          {React.createElement(FAIcon[pageIcon])}
        </IconContext.Provider>
        <h2 className="my-2">
          {pageTitle.length > 25
            ? pageTitle.substring(0, 25) + "..."
            : pageTitle}
        </h2>
        <p>
          {pageDescription.length > 85
            ? pageDescription.substring(0, 85) + "..."
            : pageDescription}
        </p>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 15px;
`;

const Card = styled.div`
  padding: 20px;
  width: 280px;
  height: 280px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.5);
    transition: all 0.5s ease-out;
  }

  ${(props) => {
    if (props.selected) {
      return `
			box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.5);
			border: rgba(17, 153, 158, 0.7);
			border-width: 2px;
			border-style: solid;
			transition: all 0.5s ease-out;
			`;
    } else {
      return `
			box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.15);
			border: transparent;
			border-width: 2px;
			border-style: solid;
			transition: all 0.5s ease-out;
			`;
    }
  }}
`;
