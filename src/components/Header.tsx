import { useState } from "react";
import { navLinks } from "../assets/data";

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
						{navLinks.map((navLink, index) => (
							<li className="nav__item" key={index}>
								<a
									href={`#${navLink?.id}`}
									className="nav__link"
								>
									{navLink?.name}
								</a>
							</li>
						))}
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
