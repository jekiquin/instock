import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectWarehouses, getWarehouses } from "../../features/Warehouses/warehouseSlice";
import Warehouse from "../../features/Warehouses/Warehouse";

export default function WarehousePage() {
	const warehouseList = useSelector(selectWarehouses);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWarehouses());
	}, [dispatch]);

	return (
		<main className="WarehousesPage">
			<h1>Warehouses</h1>
			{/* add a search component here */}
			{/* add a button component here */}
			<Warehouse warehouseList={warehouseList} />
		</main>
	);
}
