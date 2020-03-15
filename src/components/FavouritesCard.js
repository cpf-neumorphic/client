import React from "react";
import * as MaterialDesign from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";

const Wrapper = styled.div`
	// margin: 20px;
	padding: 15px;
`;

const Card = styled.div`
	padding: 20px;
	width: 280px;
	height: 280px;
	border-radius: 20px;
	box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.15);
	overflow: hidden;
`;

const defaults = require("../asset/favourites.json")["0"];

export default function FavouritesCard(props) {
	const { icon, title, description } = props.data || defaults;

	return (
		<Wrapper>
			<Card>
				<IconContext.Provider value={{ color: "11999e", size: "64px" }}>
					{React.createElement(MaterialDesign[icon])}
				</IconContext.Provider>
				<h2 className="my-2">
					{title.length > 25 ? title.substring(0, 25) + "..." : title}
				</h2>
				<p>
					{description.length > 85
						? description.substring(0, 85) + "..."
						: description}
				</p>
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
