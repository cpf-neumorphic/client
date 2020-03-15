import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import Scrollable from "./Scrollable";
import FavouritesCard from "./FavouritesCard";
import FavouritesAddButton from "./FavouritesAddButton";

const defaults = [0, 1, 2];
const all_favourites = require("../asset/favourites.json");

export default function Favourites(props) {
	const [favourites, setFavourites] = useState(props.userFavouries || defaults);
	const [showFavModal, setFavModal] = useState(false);

	const currFavourites = favourites.map(id => {
		const data = all_favourites[id];
		return <FavouritesCard key={id} data={data} />;
	});

	const allFavourites = Object.keys(all_favourites).map(id => {
		const data = all_favourites[id];
		return <FavouritesCard key={id} data={data} />;
	});

	const handleClose = () => setFavModal(false);
	const handleSave = () => {};

	const addButtonHandler = () => {
		setFavModal(true);
	};

	return (
		<>
			<FavouritesAddButton addButtonHandler={addButtonHandler} />
			{currFavourites}
			<Modal show={showFavModal} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>
						<h3>Add Favourites</h3>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Scrollable>{allFavourites}</Scrollable>
				</Modal.Body>
				<Modal.Footer>
					<button>Save</button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

// import React, { useState } from "react";
// import Favourites_card from "./components/Favourites_card";
// import Favourites_addbutton from "./components/Favourites_addbutton";
// import { Container, Col, Row, Button } from "react-bootstrap";
// import { useMediaQuery } from "react-responsive";
// import styled from "styled-components";
// import "./index.css";

// const Button_ = styled(Button)`
// 	// border-style: solid;
// 	height: 310px;
// 	width: 300px;
// 	padding-top: 50px;
// 	padding-right: 70px;
// 	padding-bottom: 50px;
// 	padding-left: 70px;
// 	border-radius: 10%;
// 	// overflow-y: hidden;
// 	display: flex;
// `;

// export default function Favourites() {
// 	let userFavourites = [];
// 	let rows = 0;
// 	let productRows = [];

// 	const isDesktopOrLaptop = useMediaQuery({
// 		query: "(min-width: 600px)"
// 	});
// 	const isTabletOrMobileDevice = useMediaQuery({
// 		query: "(max-width: 600px)"
// 	});

// 	const getUserFavourites = props => {
// 		userFavourites = [];
// 		rows = 0;
// 		productRows = [];
// 		console.log(props.Favourites);

// 		props.Favourites.map(Favourite =>
// 			Favourite.status ? userFavourites.push(Favourite) : ""
// 		);
// 		rows = [...Array(Math.ceil(userFavourites.length / 3))];
// 		productRows = rows.map((row, idx) =>
// 			userFavourites.slice(idx * 3, idx * 3 + 3)
// 		);
// 		// productRows.map(row => console.log(row));
// 		// return productRows;
// 	};

// 	const [Items, setItems] = useState({
// 		Favourites: require("./asset/List_of_favourites.json")
// 	});

// 	console.log(Items.Favourites);

// 	return (
// 		// <Styles>

// 		<Container>
// 			{getUserFavourites(Items)}
// 			<Row>
// 				<h1>Favourites </h1>
// 			</Row>
// 			<Row>
// 				<p>You mostly used these </p>
// 			</Row>

// 			{isDesktopOrLaptop && (
// 				<div>
// 					{productRows.map((row, idx) => (
// 						<Row className="m-4">
// 							{row.map(Favourite => (
// 								<Col sm={4}>
// 									<Button_ variant="light" className="shadow-sm m-1">
// 										<Favourites_card data={Favourite} size={"30%"} />
// 									</Button_>
// 								</Col>
// 							))}
// 							{productRows.length === idx + 1 ? (
// 								<Favourites_addbutton data={setItems} Items={Items} />
// 							) : (
// 								""
// 							)}
// 						</Row>
// 					))}
// 					{productRows.length === 0 ? (
// 						<Favourites_addbutton data={setItems} Items={Items} />
// 					) : (
// 						""
// 					)}
// 				</div>
// 			)}
// 			{isTabletOrMobileDevice && (
// 				<div className="mobile_config">
// 					{userFavourites.map(Favourite => (
// 						<Button_
// 							id="mobile_favouritesCart"
// 							variant="light"
// 							className="shadow-sm m-2"
// 						>
// 							<Favourites_card data={Favourite} size={"30%"} />
// 						</Button_>
// 					))}
// 					<div className="mobile_Addbutton">
// 						<Favourites_addbutton data={setItems} Items={Items} />
// 					</div>
// 				</div>
// 			)}
// 		</Container>
// 		// </Styles>
// 	);
// }
