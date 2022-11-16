import { About, Header, Home } from "./components";

const App = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Home />
				<About />
			</main>
		</>
	);
};

export default App;
