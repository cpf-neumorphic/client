import React, { useState } from "react";
import Favourites_card from "./components/Favourites_card";
import Favourites_addbutton from "./components/Favourites_addbutton";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import "./index.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { getAppInsights } from "./TelemetryService";
import TelemetryProvider from "./telemetry-provider";
// import Timer from "react-timer";
import IdleTimer from "react-idle-timer";

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
//---------------------------------------------------------------------------

const _onAction = e => {
  console.log("user did something", e);
};

const _onActive = e => {
  console.log("user is active", e);
};

const _onIdle = e => {
  // send *sendInfor* to API
  let sendInfor = null;
  console.log("user is idle", e);
  console.log("last active", idleTimer.getLastActiveTime());
  sendInfor = {
    NRIC: "S9526187D",
    Usage: [
      {
        page_id: window.location.pathname,
        time_spent: idleTimer.getElapsedTime()
      }
    ]
  };
  console.log(sendInfor);
};

let idleTimer = null;
let onAction = _onAction.bind(this);
let onActive = _onActive.bind(this);
let onIdle = _onIdle.bind(this);
const timeout = 5000;

const sendElapsedTime = pageID => {
  let sendInfor = null;
  // send *sendInfor* to API
  sendInfor = {
    NRIC: "S9526187D",
    Usage: [
      {
        page_id: pageID,
        time_spent: idleTimer.getElapsedTime()
      }
    ]
  };
  console.log(sendInfor);
};

const ActivityTracker = () => (
  <IdleTimer
    ref={ref => {
      idleTimer = ref;
    }}
    element={document}
    onActive={onActive}
    onIdle={onIdle}
    onAction={onAction}
    debounce={250}
    timeout={timeout}
  />
);
//-------------------------------------------------------------------------

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

function App() {
  let appInsights = null;
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
    <BrowserRouter>
      <TelemetryProvider
        instrumentationKey="3a827613-7d2c-4f5a-b38e-63b3f4ca54e3"
        after={() => {
          appInsights = getAppInsights();
        }}
      >
        <div>
          <ActivityTracker />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
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
                <Row className="m-4" key={idx}>
                  {row.map(Favourite => (
                    <Col sm={4} key={Favourite.id}>
                      <Button_
                        variant="light"
                        className="shadow-sm m-1"
                        onClick={() =>
                          sendElapsedTime(window.location.pathname)
                        }
                      >
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
                  onClick={() => sendElapsedTime(window.location.pathname)}
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
      </TelemetryProvider>
    </BrowserRouter>
  );
}

export default App;
