import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div component="div" className="d-flex flex-column min-vh-100">
				<div className="flex-grow-1">
					<Navbar></Navbar>
					<main>Main view</main>
				</div>
				<Footer></Footer>
			</div>
		</Router>
	);
}

export default App;
