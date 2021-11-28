import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { pathToPageName } from '../../utils/utils';
import {
	getInventories,
	selectInventories,
	selectSearchedInventories
} from '../../features/Inventories/InventorySlice';
import Inventory from '../../features/Inventories/Inventory';
import PageHead from '../../components/PageHead/PageHead';
import InfoItemLabels from '../../components/InfoItemLabel/InfoItemLabel';
import { HEADERLABELS, PAGELABELS } from '../../data/page-labels';
import './InventoryPage.scss';

export default function InventoryPage() {
	const searchedInventory = useSelector(selectSearchedInventories);
	const allInventories = useSelector(selectInventories);
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const page = pathToPageName(pathname);

	useEffect(() => {
		if (!allInventories.length) {
			dispatch(getInventories());
		}
	}, [dispatch, allInventories]);
	return (
		<main className="InventoryPage">
			<div className="InventoryPage__container">
				<PageHead info={PAGELABELS.inventory} />
				<InfoItemLabels labels={HEADERLABELS.INVENTORY} page={page} />
				<Inventory inventoryList={searchedInventory} />
			</div>
		</main>
	);
}
