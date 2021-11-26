import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
	name: "search",
	initialState: {
		searchTerm: "",
	},
	reducers: {
		setSearch: (state, action) => {
			state.searchTerm = action.payload;
		},
	},
});

export const { setSearch } = search.actions;

export const selectSearchTerm = (state) => state.search.searchTerm;

export default search.reducer;
