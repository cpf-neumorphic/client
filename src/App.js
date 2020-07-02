import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ActivityTracker from "./components/ActivityTracker";
import { UserProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <Router>
      <UserProvider>
        <div className="d-flex flex-column min-vh-100">
          <div className="flex-grow-1">
            <Navbar />
            <main>
              <ActivityTracker />
              <Switch>{routes}</Switch>
            </main>
          </div>
          <Footer />
        </div>
      </UserProvider>
    </Router>
  );
}
