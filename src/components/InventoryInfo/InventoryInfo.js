import { useLocation } from 'react-router';
import InfoItems from '../InfoItems/InfoItems';
import { HEADERLABELS, PAGELABELS } from '../../data/page-labels';

export default function InventoryInfo({ inventory }) {
	const { id, itemName, category, status, quantity, warehouseName } = inventory;
	const { pathname } = useLocation();

	const inventoryInfo = [
		[HEADERLABELS.INVENTORY[0], itemName, 'link', id],
		[HEADERLABELS.INVENTORY[1], category, 'normal'],
		[HEADERLABELS.INVENTORY[2], status, 'special', status.replace(' ', '-')],
		[HEADERLABELS.INVENTORY[3], quantity, 'normal']
	];

	if (pathname.includes(PAGELABELS.inventories.header.toLowerCase())) {
		inventoryInfo.push([HEADERLABELS.INVENTORY[4], warehouseName, 'normal']);
	}

	return <InfoItems pathname={pathname} data={inventoryInfo} />;
}
