import { v4 as uuid } from "uuid";
import { isLoadingWarehouses } from "./warehouseSlice";
import WarehouseInfo from "../../components/WarehouseInfo/WarehousInfo";
import { useSelector } from "react-redux";

export default function Warehouse({ warehouseList }) {
	const isLoading = useSelector(isLoadingWarehouses);
	return isLoading ? (
		<h2>Loading Warehouses...</h2>
	) : (
		<div className="Warehouse">
			{warehouseList.map((warehouse) => (
				<WarehouseInfo key={uuid()} warehouse={warehouse} />
			))}
		</div>
	);
}
