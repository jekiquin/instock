import { NavLink, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./Header.scss";
import logo from "../../assets/Logo/InStock-Logo_1x.png";

const NAVITEMS = ["Warehouses", "Inventories"];

export default function Header() {
	const navItems = NAVITEMS.map((item) => (
		<NavLink key={uuid()} className="Header__nav-item" to={`/${item.toLowerCase()}`}>
			{item}
		</NavLink>
	));

	return (
		<header className="Header">
			<div className="Header__container">
				<Link className="Header__logo" to="/">
					<img src={logo} alt="Logo" />
				</Link>
				<nav className="Header__nav">{navItems}</nav>
			</div>
		</header>
	);
}
