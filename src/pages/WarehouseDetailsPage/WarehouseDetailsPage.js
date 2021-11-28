import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function WarehouseDetailsPage() {
	const { warehouseId } = useParams();
	return <div>WarehouseDetailsPage</div>;
}
