import { useState } from "react";

const Header = () => {
	const [showHeader, setShowHeader] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	const scrollHeader = () => {
		window.scrollY >= 80 ? setShowHeader(true) : setShowHeader(false);
	};
	window.addEventListener("scroll", scrollHeader);

	const menuShow = () => {
		setShowMenu(true);
	};

	const menuClose = () => {
		setShowMenu(false);
	};
	return (
		<header className={showHeader ? "header scroll-header" : "header"}>
			<nav className="nav container">
				<a href="/" className="nav__logo">
					<i className="ri-leaf-line nav__logo-icon"></i>PLANTEX
				</a>
				<div
					className={showMenu ? "nav__menu show-menu" : "nav__menu"}
					id="nav__menu"
				>
					<ul className="nav__list">
						<li className="nav__item">
							<a href="#home" className="nav__link">
								Home
							</a>
						</li>
						<li className="nav__item">
							<a href="#about" className="nav__link">
								About
							</a>
						</li>
						<li className="nav__item">
							<a href="#products" className="nav__link">
								Products
							</a>
						</li>
						<li className="nav__item">
							<a href="#faqs" className="nav__link">
								FAQs
							</a>
						</li>
						<li className="nav__item">
							<a href="/#contact" className="nav__link">
								Contact Us
							</a>
						</li>
					</ul>

					<div
						className="nav__close"
						onClick={menuClose}
						id="nav-close"
					>
						<i className="ri-close-line"></i>
					</div>
				</div>
				<div className="nav__btns">
					<i
						className="ri-moon-line change-theme"
						id="theme-button"
					></i>

					<div
						className="nav__toggle"
						onClick={menuShow}
						id="nav-toggle"
					>
						<i className="ri-menu-line"></i>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
