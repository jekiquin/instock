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

export const selectWarehouses = (state) => state.warehouses.warehouses;
export const isLoadingWarehouses = (state) => state.warehouses.isLoading;

export default warehouseSlice.reducer;
