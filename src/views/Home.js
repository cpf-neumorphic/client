import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import SectionHeader from "../components/SectionHeader";
import LandingCard from "../components/LandingCard";
// import SearchBar from "../components/SearchBar";

import helloImg from "../img/landing-hello.png";

const Section = styled.section`
	margin-bottom: 4rem;
`;

const LandingGreen = styled.div`
	background: #e4f9f5;
	padding-bottom: 160px;
	margin-bottom: -160px;
	text-align: center;
`;

const Scrollable = styled(Container)`
	display: flex;
	justify-content: ${props => (props.center ? "center" : "space-between")};
	flex-wrap: wrap;

	@media (max-width: 768px) {
		display: absolute;
		justify-content: flex-start;
		flex-wrap: nowrap;
		overflow-x: auto;
		margin: 0;
		padding: 0;
		max-width: none;
	}
`;

export default props => {
	const name = props.name || "Adam";

	return (
		<>
			<Section>
				<LandingGreen>
					<div className="container">
						<img
							style={{ height: "120px", margin: "2rem auto" }}
							alt="Hello there"
							src={helloImg}
							draggable="false"
						/>
						<h1>Hello, {name}</h1>
						<p>What would you like to do today?</p>
						<p>[SEARCH BAR]</p>
					</div>
				</LandingGreen>
				<Scrollable center={1}>{landingCards}</Scrollable>
			</Section>
			<Section>
				<SectionHeader header="Favourites" text="You mostly used these" />
				<Scrollable>{landingCards}</Scrollable>
			</Section>
			<Section>
				<SectionHeader header="Recommended" text="These may be useful" />
				<Scrollable>{landingCards}</Scrollable>
			</Section>
		</>
	);
};

const landingCards = (
	<>
		<LandingCard icon="Zap" header="View" text="Your statements" />
		<LandingCard icon="Bell" header="Manage" text="Your accounts" />
		<LandingCard icon="Bell" header="Appointments" text="Create & modify" />
		<LandingCard icon="Bell" header="Appointments" text="Create & modify" />
		<LandingCard icon="Bell" header="Appointments" text="Create & modify" />
	</>
);

// const styles = {
// 	Container: {
// 		// background: "#e4f9f5",
// 		// zIndex: -1000
// 		background: "#e4f9f5",
// 		borderRadius: 0,
// 		flex: "none",
// 		height: "320px",
// 		left: 0,
// 		margin: "0 0 0 0",
// 		position: "absolute",
// 		top: 0,
// 		width: "100%",
// 		zIndex: -1,
// 		maxWidth: "100%"
// 	}
// };

// const prev = (
// 	<div className="App">
// 		App
// 		<div style={styles.Container}>
// 			<Container>
// 				<br />
// 				<br />
// 				<SearchBar></SearchBar>
// 				<br />
// 				<br />
// 				<Row>
// 					<LandingCard
// 						icon="Zap"
// 						header="View"
// 						text="Your statements"
// 					></LandingCard>
// 					<LandingCard
// 						icon="Bell"
// 						header="Manage"
// 						text="Your accounts"
// 					></LandingCard>
// 					<LandingCard
// 						icon="Bell"
// 						header="Appointments"
// 						text="Create & modify"
// 					></LandingCard>
// 				</Row>
// 				<SectionHeader
// 					header="Recommended"
// 					text="These may be useful"
// 				></SectionHeader>
// 				<Row>
// 					<LandingCard
// 						icon="Zap"
// 						header="View"
// 						text="Your statements"
// 					></LandingCard>
// 					<LandingCard
// 						icon="Bell"
// 						header="Manage"
// 						text="Your accounts"
// 					></LandingCard>
// 					<LandingCard
// 						icon="Bell"
// 						header="Appointments"
// 						text="Create & modify"
// 					></LandingCard>
// 				</Row>
// 			</Container>
// 		</div>
// 	</div>
// );
