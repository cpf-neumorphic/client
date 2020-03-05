import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="d-flex flex-column min-vh-100">
			<div className="flex-grow-1">
				<Navbar></Navbar>
				<main>Main view</main>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default App;
