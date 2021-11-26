import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getWarehouses, selectSearchedWarehouses } from "../../features/Warehouses/warehouseSlice";
import Warehouse from "../../features/Warehouses/Warehouse";
import PageHead from "../../components/PageHead/PageHead";
import PAGELABELS from "../../data/page-labels";
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
				<PageHead info={PAGELABELS.warehouse} />
				<Warehouse warehouseList={warehouseList} />
			</div>
		</main>
	);
}
