import { Navigate, useParams } from 'react-router';

export default function RedirectToInventories() {
	const { inventoryId } = useParams();
	return <Navigate replace to={`/inventories/${inventoryId}`} />;
}
