import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getWarehouseById } from '../../features/Warehouses/warehouseSlice';

export default function WarehouseDetailsPage() {
	const { warehouseId } = useParams();
	const warehouse = useSelector(getWarehouseById(warehouseId));
	console.log(warehouse);
	return <div>{warehouseId}</div>;
}
