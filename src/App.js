import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LandingCard from "./components/LandingCard";

function App() {
  return (
    <div className="App">
      App
      <Container>
        <Row>
          <LandingCard header="View" text="Your statements"></LandingCard>
          <LandingCard header="Manage" text="Your accounts"></LandingCard>
          <LandingCard
            header="Appointments"
            text="Create & modify"
          ></LandingCard>
        </Row>
      </Container>
    </div>
  );
}

export default App;
