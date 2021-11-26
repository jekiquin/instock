import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
	selectWarehouses,
	getWarehouses,
	selectSearchedWarehouses,
} from "../../features/Warehouses/warehouseSlice";
import Warehouse from "../../features/Warehouses/Warehouse";
import PageHead from "../../components/PageHead/PageHead";
import "./WarehousePage.scss";

export default function WarehousePage() {
	const warehouseList = useSelector(selectSearchedWarehouses);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWarehouses());
	}, [dispatch]);

	return (
		<main className="WarehousePage">
			<div className="WarehousePage__container">
				<PageHead header="Warehouses" />
				<Warehouse warehouseList={warehouseList} />
			</div>
		</main>
	);
}
