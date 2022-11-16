import { Link } from "react-router-dom";
import HomeImg from "../assets/image/home.png";

const Home = () => {
	return (
		<section className="home" id="home">
			<div className="home__container container grid">
				<img src={HomeImg} alt="" className="home__img" />
				<div className="home__data">
					<h1 className="home__title">
						Plants will make <br /> your life better
					</h1>
					<p className="home__description">
						Create incredible plant design for your offices or
						apastaments. Add fresness to your new ideas.
					</p>
					<Link to="" className="button button--flex">
						Explore
						<i className="ri-arrow-right-down-line button__icon"></i>
					</Link>
				</div>
				<div className="home__social">
					<span className="home__social-follow">Follow Us</span>
					<div className="home__social-links">
						<Link
							to=""
							className="home__social-link"
							target="_blank"
						>
							<i className="ri-facebook-fill"></i>
						</Link>

						<Link
							to=""
							className="home__social-link"
							target="_blank"
						>
							<i className="ri-instagram-line"></i>
						</Link>
						<Link
							to=""
							className="home__social-link"
							target="_blank"
						>
							<i className="ri-twitter-fill"></i>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
