import Search from "../../features/Search/Search";
import MainAddButton from "../../features/MainAddButton/MainAddButton";
import "./PageHead.scss";

export default function PageHead({ info }) {
	return (
		<div className="PageHead">
			<h1>{info.header}</h1>
			<div>
				<Search />
				<MainAddButton label={info.button} action={info.action} />
			</div>
		</div>
	);
}
