import { useLocation } from 'react-router';
import { labelsFromInfo, pathToPageName } from '../../utils/utils';
import InfoItemLabels from '../InfoItemLabel/InfoItemLabel';
import InfoItems from '../InfoItems/InfoItems';

export default function InventoryInfo({ inventory }) {
	const { id, itemName, category, status, quantity, warehouseName } = inventory;
	const { pathname } = useLocation();

	const inventoryInfo = [
		['INVENTORY ITEM', itemName, 'link', id],
		['CATEGORY', category, 'normal'],
		['STATUS', status, 'special', status.replace(' ', '-')],
		['QUANTITY', quantity, 'normal'],
		['WAREHOUSE', warehouseName, 'normal']
	];

	const page = pathToPageName(pathname);
	const labels = labelsFromInfo(inventoryInfo);

	return (
		<>
			<InfoItemLabels page={page} labels={labels} />
			<InfoItems pathname={pathname} data={inventoryInfo} />
		</>
	);
}
