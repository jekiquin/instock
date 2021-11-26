import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Search.scss";
import { setSearch } from "./searchSlice";

export default function Search() {
	const [searchTerm, setSearchTerm] = useState("");
	const dispatch = useDispatch();

	const inputSearchTerm = ({ target }) => {
		setSearchTerm(target.value);
		dispatch(setSearch(target.value.toLowerCase().trim()));
	};

	return (
		<>
			<input
				className="Search"
				type="search"
				placeholder="Search..."
				value={searchTerm}
				onChange={inputSearchTerm}
			/>
		</>
	);
}
