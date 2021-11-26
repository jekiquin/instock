import { configureStore } from "@reduxjs/toolkit";
import warehouseReducer from "../features/Warehouses/warehouseSlice";
import searchReducer from "../features/Search/searchSlice";

export const store = configureStore({
	reducer: {
		warehouses: warehouseReducer,
		search: searchReducer,
	},
});
