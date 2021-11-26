import { Link, useLocation } from "react-router-dom";
import "./MainAddButton.scss";

export default function MainAddButton({ label, action }) {
	const { pathname } = useLocation();
	return (
		<Link to={`${pathname}/add`} className="MainAddButton">
			{`+ Add New ${label}`}
		</Link>
	);
}
