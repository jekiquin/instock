import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../app/axios';
import { getInventories } from '../Inventories/InventorySlice';

export const getWarehouses = createAsyncThunk('warehouses', async () => {
	return await getData('/warehouses');
});

const warehouseSlice = createSlice({
	name: 'warehouses',
	initialState: {
		warehouses: [],
		isLoading: true,
		failedToLoad: false
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
		}
	}
});

const getValuesFromWarehouse = (warehouse) => {
	const warehouseValues = Object.values(warehouse);
	const contactIndex = warehouseValues.findIndex((value) => typeof value === 'object');
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
	filterWarehousesBySearch(selectWarehouses(state), state.search.searchTerm);

export const getWarehouseById = (id) => {
	return (state) => {
		const warehouse = state.warehouses.warehouses.find((warehouse) => warehouse.id === id);
		const inventoryAtWarehouse = state.inventories.inventories.filter(
			(inventory) => inventory.warehouseID === id
		);

		return { ...warehouse, inventories: inventoryAtWarehouse };
	};
};

export const getAllData = () => {
	return (dispatch) => {
		dispatch(getWarehouses());
		dispatch(getInventories());
	};
};

export default warehouseSlice.reducer;
