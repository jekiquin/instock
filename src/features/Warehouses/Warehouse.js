import { v4 as uuid } from "uuid";
import WarehouseInfo from "../../components/WarehouseInfo/WarehousInfo";

export default function Warehouse({ warehouseList }) {
	return (
		<div className="Warehouse">
			{warehouseList.map((warehouse) => (
				<WarehouseInfo key={uuid()} warehouse={warehouse} />
			))}
		</div>
	);
}
