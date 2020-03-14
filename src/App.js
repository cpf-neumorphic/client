import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useState } from "react";
import Favourites_card from "./components/Favourites_card";
import Favourites_addbutton from "./components/Favourites_addbutton";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import "./index.css";

import routes from "./routes";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
	return (
		<Router>
			<div className="d-flex flex-column min-vh-100">
				<div className="flex-grow-1">
					<Navbar />
					<main>
						<Switch>{routes}</Switch>
					</main>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

const Button_ = styled(Button)`
	// border-style: solid;
	height: 310px;
	width: 300px;
	padding-top: 50px;
	padding-right: 70px;
	padding-bottom: 50px;
	padding-left: 70px;
	border-radius: 10%;
	// overflow-y: hidden;
	display: flex;
`;

function App() {
	let userFavourites = [];
	let rows = 0;
	let productRows = [];

	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 600px)"
	});
	const isTabletOrMobileDevice = useMediaQuery({
		query: "(max-width: 600px)"
	});

	const getUserFavourites = props => {
		userFavourites = [];
		rows = 0;
		productRows = [];
		console.log(props.Favourites);

		props.Favourites.map(Favourite =>
			Favourite.status ? userFavourites.push(Favourite) : ""
		);
		rows = [...Array(Math.ceil(userFavourites.length / 3))];
		productRows = rows.map((row, idx) =>
			userFavourites.slice(idx * 3, idx * 3 + 3)
		);
		// productRows.map(row => console.log(row));
		// return productRows;
	};

	const [Items, setItems] = useState({
		Favourites: require("./asset/List_of_favourites.json")
	});

	console.log(Items.Favourites);

	return (
		<Container>
			{getUserFavourites(Items)}
			<Row>
				<h1>Favourites </h1>
			</Row>
			<Row>
				<p>You mostly used these </p>
			</Row>

			{isDesktopOrLaptop && (
				<div>
					{productRows.map((row, idx) => (
						<Row className="m-4">
							{row.map(Favourite => (
								<Col sm={4}>
									<Button_ variant="light" className="shadow-sm m-1">
										<Favourites_card data={Favourite} size={"30%"} />
									</Button_>
								</Col>
							))}
							{productRows.length === idx + 1 ? (
								<Favourites_addbutton data={setItems} Items={Items} />
							) : (
								""
							)}
						</Row>
					))}
					{productRows.length === 0 ? (
						<Favourites_addbutton data={setItems} Items={Items} />
					) : (
						""
					)}
				</div>
			)}
			{isTabletOrMobileDevice && (
				<div className="mobile_config">
					{userFavourites.map(Favourite => (
						<Button_
							id="mobile_favouritesCart"
							variant="light"
							className="shadow-sm m-2"
						>
							<Favourites_card data={Favourite} size={"30%"} />
						</Button_>
					))}
					<div className="mobile_Addbutton">
						<Favourites_addbutton data={setItems} Items={Items} />
					</div>
				</div>
			)}
		</Container>
		// </Styles>
	);
}
