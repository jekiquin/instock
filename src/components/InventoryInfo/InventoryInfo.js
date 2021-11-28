import { useLocation } from 'react-router';
import InfoItems from '../InfoItems/InfoItems';
import { HEADERLABELS } from '../../data/page-labels';

export default function InventoryInfo({ inventory }) {
	const { id, itemName, category, status, quantity, warehouseName } = inventory;
	const { pathname } = useLocation();

	const inventoryInfo = [
		[HEADERLABELS.INVENTORY[0], itemName, 'link', id],
		[HEADERLABELS.INVENTORY[1], category, 'normal'],
		[HEADERLABELS.INVENTORY[2], status, 'special', status.replace(' ', '-')],
		[HEADERLABELS.INVENTORY[3], quantity, 'normal'],
		[HEADERLABELS.INVENTORY[4], warehouseName, 'normal']
	];

	return <InfoItems pathname={pathname} data={inventoryInfo} />;
}
