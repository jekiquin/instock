import { configureStore } from "@reduxjs/toolkit";
import warehouseReducer from "../features/Warehouses/warehouseSlice";

export const store = configureStore({
	reducer: {
		warehouses: warehouseReducer,
	},
});
