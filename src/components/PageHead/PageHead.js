import Search from "../../features/Search/Search";
import MainAddButton from "../MainAddButton/MainAddButton";
import "./PageHead.scss";

export default function PageHead({ info }) {
	return (
		<div className="PageHead">
			<h1>{info.header}</h1>
			<div className="PageHead__cta-container">
				<Search />
				<MainAddButton label={info.button} />
			</div>
		</div>
	);
}
