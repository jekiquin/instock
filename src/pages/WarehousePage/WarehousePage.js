import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
	getWarehouses,
	selectSearchedWarehouses,
	selectWarehouses,
} from "../../features/Warehouses/warehouseSlice";
import Warehouse from "../../features/Warehouses/Warehouse";
import PageHead from "../../components/PageHead/PageHead";
import PAGELABELS from "../../data/page-labels";
import "./WarehousePage.scss";

export default function WarehousePage() {
	const searchedWarehouse = useSelector(selectSearchedWarehouses);
	const allWarehouses = useSelector(selectWarehouses);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!allWarehouses.length) {
			dispatch(getWarehouses());
		}
	}, [dispatch, allWarehouses]);

	return (
		<main className="WarehousePage">
			<div className="WarehousePage__container">
				<PageHead info={PAGELABELS.warehouse} />
				<Warehouse warehouseList={searchedWarehouse} />
			</div>
		</main>
	);
}
