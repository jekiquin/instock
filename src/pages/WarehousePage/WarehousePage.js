import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectWarehouses, getWarehouses } from "../../features/Warehouses/warehouseSlice";
import Warehouse from "../../features/Warehouses/Warehouse";

export default function WarehousePage() {
	const warehouseList = useSelector(selectWarehouses);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWarehouses());
	}, []);

	console.log(warehouseList);
	return <Warehouse />;
}
