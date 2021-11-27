import { configureStore } from '@reduxjs/toolkit';
import warehouseReducer from '../features/Warehouses/warehouseSlice';
import searchReducer from '../features/Search/searchSlice';
import inventoryReducer from '../features/Inventories/InventorySlice';

export const store = configureStore({
	reducer: {
		warehouses: warehouseReducer,
		search: searchReducer,
		inventories: inventoryReducer
	}
});
