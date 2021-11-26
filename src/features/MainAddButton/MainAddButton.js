import { useDispatch } from "react-redux";

export default function MainAddButton({ label, action }) {
	const dispatch = useDispatch();
	const onClickHandler = () => {
		// dispatch(action);
	};
	return (
		<>
			<button className="MainAddButton" onClick={onClickHandler}>
				{`+ Add New ${label}`}
			</button>
		</>
	);
}
