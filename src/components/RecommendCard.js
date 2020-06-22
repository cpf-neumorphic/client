import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import * as FAIcon from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { IconContext } from "react-icons";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding: 15px;
`;

const Card = styled.div`
  padding: 20px;
  width: 280px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.5);
    transition: all 0.5s ease-out;
  }

  // & h2 {
  // 	font-size: 1.5rem;
  // }

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

const IconCircle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 40px;
  background: #11999e;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const RemoveWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const defaults = require("../asset/recommendations.json")["0"];

export default function FavouritesCard(props) {
  const { icon, title } = props.data || defaults;
  const selected = props.selected || false;
  const handleClick = props.onClick;

  return (
    <Wrapper onClick={handleClick}>
      <RemoveWrapper>
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Not relevant</Tooltip>}
        >
          <IoMdCloseCircle size="28px" color="#828282" />
        </OverlayTrigger>
      </RemoveWrapper>
      <Card selected={selected}>
        <IconCircle>
          <IconContext.Provider value={{ color: "white", size: "36px" }}>
            {React.createElement(FAIcon[icon])}
          </IconContext.Provider>
        </IconCircle>
        <h2 className="my-2">
          {title.length > 25 ? title.substring(0, 25) + "..." : title}
        </h2>
      </Card>
    </Wrapper>
  );
}

// import React from "react";
// import { Row, Container } from "react-bootstrap";
// import * as MaterialDesign from "react-icons/fa";
// import { IconContext } from "react-icons";
// import styled from "styled-components";
// import "./test.css";

// const IconContext_ = styled(IconContext)`
//   // border-style: solid;
//   align: center;
// `;

// function Favourites_card(props) {
//   console.log(props);
//   const { icon, header, description } = props.data;
//   const mdIcon = MaterialDesign[icon];
//   const size_ = props.size;
//   console.log(size_);
//   console.log({ mdIcon });
//   return (
//     <Container>
//       <IconContext_.Provider value={{ color: "11999e", size: size_ }}>
//         <Row>{React.createElement(mdIcon)}</Row>
//       </IconContext_.Provider>
//       <Row>
//         <h4 className="title">{header}</h4>
//       </Row>
//       <Row className="hide">
//         <p className="body p">{description}</p>
//       </Row>
//     </Container>
//   );
// }

// export default Favourites_card;
