import React from "react";
import { Container, Row } from "react-bootstrap";
import LandingCard from "./components/LandingCard";

function App() {
  return (
    <div className="App">
      App
      <Container>
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
