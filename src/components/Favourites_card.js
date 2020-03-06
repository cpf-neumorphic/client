import React from "react";
import { Row } from "react-bootstrap";
import * as MaterialDesign from "react-icons/fa";
import { IconContext } from "react-icons";

function Favourites_card(props) {
  const { icon, header, description } = props.data;
  const mdIcon = MaterialDesign[icon];
  const size_ = props.size;
  console.log(size_);
  console.log({ mdIcon });
  return (
    <div>
      <IconContext.Provider value={{ color: "#11999E", size: size_ }}>
        <Row>{React.createElement(mdIcon)}</Row>
      </IconContext.Provider>
      <Row>
        <h4>{header}</h4>
      </Row>
      <Row>
        <p>{description}</p>
      </Row>
    </div>
  );
}

export default Favourites_card;
