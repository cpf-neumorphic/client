import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Scrollable from "../components/Scrollable";
import SectionHeader from "../components/SectionHeader";
import LandingCard from "../components/LandingCard";
import SearchBar from "../components/SearchBar2";
import Favourites from "../components/Favourites";
import RecommendCard from "../components/RecommendCard";
import { UserContext } from "../contexts/UserContext";
import { getPageInforFromPageId, getAllCategoryInfor } from "../asset/pages";

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

export default (props) => {
  const history = useHistory();
  const { currentUser } = useContext(UserContext);

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
            <h1>Hello, {currentUser.name}</h1>
            <p>What would you like to do today?</p>
            <SearchBar></SearchBar>
          </div>
        </LandingGreen>
        <Scrollable center={1}>
          {getAllCategoryInfor().map((category) => (
            <LandingCard
              icon={category.categoryIcon}
              header={category.categoryTitle}
              text={category.categoryDescription}
            />
          ))}
        </Scrollable>
      </Section>
      <Section>
        <SectionHeader header="Favourites" text="You mostly used these" />
        <Scrollable>
          <Favourites />
        </Scrollable>
      </Section>
      <Section>
        <SectionHeader header="Recommended" text="These may be useful" />
        <Scrollable>
          {currentUser.recommendations.map((rec, i) => {
            const data = getPageInforFromPageId(rec);
            return (
              <RecommendCard
                key={i}
                data={data}
                onClick={() => {
                  history.push(data.pageSlug);
                }}
              />
            );
          })}
        </Scrollable>
      </Section>
    </>
  );
};

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
