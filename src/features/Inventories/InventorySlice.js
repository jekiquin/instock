import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../app/axios';

export const getInventories = createAsyncThunk('inventories', async () => {
	const response = await axiosInstance.get('/inventories');
	return response.data;
});

const inventories = createSlice({
	name: 'inventories',
	initialState: {
		inventories: [],
		isLoading: true,
		failedToLoad: false
	},
	reducers: {},
	extraReducers: {
		[getInventories.pending]: (state, action) => {
			state.isLoading = true;
			state.failedToLoad = false;
		},
		[getInventories.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.failedToLoad = false;
			state.inventories = action.payload;
		},
		[getInventories.rejected]: (state, action) => {
			state.isLoading = false;
			state.failedToLoad = true;
		}
	}
});

const getValuesFromInventory = (inventory) => {
	return Object.values(inventory);
};

const searchTermInInventories = (inventory, searchTerm) => {
	return getValuesFromInventory(inventory).some((value) =>
		value.toString().toLowerCase().includes(searchTerm)
	);
};

const filterInventoriesBySearch = (inventories, searchTerm) => {
	return inventories.filter((inventory) => searchTermInInventories(inventory, searchTerm));
};

export const selectInventories = (state) => state.inventories.inventories;
export const isLoadingInventories = (state) => state.inventories.isLoading;
export const selectSearchedInventories = (state) =>
	filterInventoriesBySearch(selectInventories(state), state.search.searchTerm);

export default inventories.reducer;
