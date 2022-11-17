import { About, Header, Home, Product, Questions, Steps } from "./components";

const App = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Home />
				<About />
				<Steps />
				<Product />
				<Questions />
			</main>
		</>
	);
};

export default App;
