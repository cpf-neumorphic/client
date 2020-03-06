import React from "react";
import { Container, Row } from "react-bootstrap";
import SectionHeader from "./components/SectionHeader";
import LandingCard from "./components/LandingCard";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Container>
        <SearchBar></SearchBar>
        <br />
        <br />
        <SectionHeader
          header="Recommended"
          text="These may be useful"
        ></SectionHeader>
        <Row>
          <LandingCard
            icon="Zap"
            header="View"
            text="Your statements"
          ></LandingCard>
          <LandingCard
            icon="Bell"
            header="Manage"
            text="Your accounts"
          ></LandingCard>
          <LandingCard
            icon="Bell"
            header="Appointments"
            text="Create & modify"
          ></LandingCard>
        </Row>
      </Container>
    </div>
  );
}

export default App;
