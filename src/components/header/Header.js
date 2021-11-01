import css from "./Header.module.css";
import { useState } from "react";
import User from "./user/User";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuHandler = (event) => {
		if (isMenuOpen && event.target.classList.contains("overlay")) {
			setIsMenuOpen((o) => !o);
			return;
		}
		setIsMenuOpen((o) => !o);
	};

	// isMenuOpen;
	// document.addEventListener("click", (e) => closeMenuHandler(e));

	return (
		<header className={css.header}>
			<div className={css["container__header"]}>
				{isMenuOpen && <div className={`${css.overlay} overlay`} onClick={(e) => menuHandler(e)}></div>}
				<div
					className={`${css["icon-menu"]} ${!isMenuOpen ? css.open : css.close} bg-center-cover-nr`}
					onClick={menuHandler}
				></div>
				<nav className={`${isMenuOpen ? css.visible : css.hidden} navbar`}>
					<ul className="fwb ">
						<li>
							<a href="/#">Collections </a>
						</li>
						<li>
							<a href="/#">Men </a>
						</li>
						<li>
							<a href="/#">Women </a>
						</li>
						<li>
							<a href="/#">About </a>
						</li>
						<li>
							<a href="/#">Contact </a>
						</li>
					</ul>
				</nav>
				<div className={css.logo}>
					<img src={"/assets/images/logo.svg"} alt="logo" />
				</div>
				<User />
			</div>
		</header>
	);
};

export default Header;
