import React from "react";
import {
	About,
	Contact,
	Footer,
	Header,
	Home,
	Product,
	Questions,
	Steps,
} from "./components";

const App = () => {
	const [showScroll, setShowScroll] = React.useState(false);

	const scrollUp = () => {
		window.scrollY >= 400 ? setShowScroll(true) : setShowScroll(false);
	};
	window.addEventListener("scroll", scrollUp);
	return (
		<React.Fragment>
			<Header />
			<main className="main">
				<Home />
				<About />
				<Steps />
				<Product />
				<Questions />
				<Contact />
			</main>

			<Footer />

			<a
				href="#"
				className={showScroll ? "scrollup show-scroll" : "scrollup"}
				id="scroll-up"
			>
				<i className="ri-arrow-up-fill scrollup__icon"></i>
			</a>
		</React.Fragment>
	);
};

export default App;
