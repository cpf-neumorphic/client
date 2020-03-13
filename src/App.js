import React from "react";
import { Container, Row } from "react-bootstrap";
import SectionHeader from "./components/SectionHeader";
import LandingCard from "./components/LandingCard";
import SearchBar from "./components/SearchBar";
import SearchBar2 from "./components/SearchBar2";

const styles = {
  Container: {
    // background: "#e4f9f5",
    // zIndex: -1000
    background: "#e4f9f5",
    borderRadius: 0,
    flex: "none",
    height: "320px",
    left: 0,
    margin: "0 0 0 0",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: -1,
    maxWidth: "100%"
  }
};

function App() {
  return (
    <div className="App">
      App
      <div style={styles.Container}>
        <Container>
          <br />
          <br />
          <SearchBar2></SearchBar2>
          <SearchBar></SearchBar>
          <br />
          <br />
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
    </div>
  );
}

export default App;
