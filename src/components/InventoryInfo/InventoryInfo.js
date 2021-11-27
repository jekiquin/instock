import { useLocation } from 'react-router';
import InfoItems from '../InfoItems/InfoItems';

export default function InventoryInfo({ inventory }) {
	const { id, itemName, category, status, warehouseName } = inventory;
	const { pathname } = useLocation();

	const inventoryInfo = [
		['INVENTORY ITEM', itemName, 'link', id],
		['CATEGORY', category, 'normal'],
		['STATUS', status, 'special', status.replace(' ', '-')],
		['WAREHOUSE', warehouseName, 'normal']
	];

	return <InfoItems pathname={pathname} data={inventoryInfo} />;
}
