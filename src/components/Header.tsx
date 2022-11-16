import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<nav className="nav container">
				<Link to="/" className="nav__logo">
					<i className="ri-leaf-line nav__logo-icon"></i>PLANTEX
				</Link>
				<div className="nav__menu" id="nav__menu">
					<ul className="nav__list">
						<li className="nav__item">
							<Link to="#home" className="nav__link">
								Home
							</Link>
						</li>
						<li className="nav__item">
							<Link to="#about" className="nav__link">
								About
							</Link>
						</li>
						<li className="nav__item">
							<Link to="#products" className="nav__link">
								Products
							</Link>
						</li>
						<li className="nav__item">
							<Link to="#faqs" className="nav__link">
								FAQs
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/" className="nav__link">
								Contact Us
							</Link>
						</li>
					</ul>

					<div className="nav__close" id="nav-close">
						<i className="ri-close-line"></i>
					</div>
				</div>
				<div className="nav__btns">
					<i
						className="ri-moon-line change-theme"
						id="theme-button"
					></i>

					<div className="nav__toggle" id="nav-toggle">
						<i className="ri-menu-line"></i>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
