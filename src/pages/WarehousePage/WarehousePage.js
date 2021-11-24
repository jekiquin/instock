import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
	selectWarehouses,
	isLoadingWarehouses,
	getWarehouses,
} from "../../features/Warehouses/warehouseSlice";
import Warehouse from "../../features/Warehouses/Warehouse";
import "./WarehousePage.scss";

export default function WarehousePage() {
	const warehouseList = useSelector(selectWarehouses);
	const isLoading = useSelector(isLoadingWarehouses);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWarehouses());
	}, [dispatch]);

	return (
		<main className="WarehousePage">
			<h1>Warehouses</h1>
			{/* add a search component here */}
			{/* add a button component here */}
			{isLoading && <p>Loading Warehouses...</p>}
			{!isLoading && <Warehouse warehouseList={warehouseList} />}
		</main>
	);
}
