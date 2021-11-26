import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../app/axios";

export const getWarehouses = createAsyncThunk("warehouses", async () => {
	const response = await axiosInstance.get("/warehouses");
	return response.data;
});

export const warehouseSlice = createSlice({
	name: "warehouses",
	initialState: {
		warehouses: [],
		isLoading: true,
		failedToLoad: false,
	},
	reducers: {},
	extraReducers: {
		[getWarehouses.pending]: (state, action) => {
			state.isLoading = true;
			state.failedToLoad = false;
		},
		[getWarehouses.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.failedToLoad = false;
			state.warehouses = action.payload;
		},
		[getWarehouses.rejected]: (state, action) => {
			state.isLoading = false;
			state.failedToLoad = true;
		},
	},
});

const getValuesFromWarehouse = (warehouse) => {
	const warehouseValues = Object.values(warehouse);
	const contactIndex = warehouseValues.findIndex((value) => typeof value === "object");
	const contactValues = Object.values(warehouseValues[contactIndex]);
	warehouseValues.splice(contactIndex, 1, ...contactValues);
	return warehouseValues;
};

const searchTermInWarehouse = (warehouse, searchTerm) => {
	return getValuesFromWarehouse(warehouse).some((value) =>
		value.toLowerCase().includes(searchTerm)
	);
};

const filterWarehousesBySearch = (warehouses, searchTerm) => {
	return warehouses.filter((warehouse) => searchTermInWarehouse(warehouse, searchTerm));
};

export const selectWarehouses = (state) => state.warehouses.warehouses;
export const isLoadingWarehouses = (state) => state.warehouses.isLoading;
export const selectSearchedWarehouses = (state) =>
	filterWarehousesBySearch(state.warehouses.warehouses, state.search.searchTerm);

export default warehouseSlice.reducer;
