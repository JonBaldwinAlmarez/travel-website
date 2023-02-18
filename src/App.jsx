import React from "react";
import Accomodation from "./Components/Accomodation";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import ReservationForm from "./Components/ReservationForm";
import TopBar from "./Components/topbar";

function App() {
	return (
		<div>
			<TopBar />
			<NavBar />
			<Hero />
			<Accomodation />
			<ReservationForm />
			<Gallery />
			<Contact />
		</div>
	);
}

export default App;
