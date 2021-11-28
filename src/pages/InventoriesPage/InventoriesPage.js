import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { pathToPageName } from '../../utils/utils';
import {
	selectInventories,
	selectSearchedInventories
} from '../../features/Inventories/InventorySlice';
import { getAllData } from '../../features/Warehouses/warehouseSlice';
import Inventory from '../../features/Inventories/Inventory';
import PageHead from '../../components/PageHead/PageHead';
import InfoItemLabels from '../../components/InfoItemLabel/InfoItemLabel';
import { HEADERLABELS, PAGELABELS } from '../../data/page-labels';
import './InventoriesPage.scss';

export default function InventoriesPage() {
	const searchedInventory = useSelector(selectSearchedInventories);
	const allInventories = useSelector(selectInventories);
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const page = pathToPageName(pathname);

	useEffect(() => {
		if (!allInventories.length) {
			dispatch(getAllData());
		}
	}, [dispatch, allInventories]);
	return (
		<main className="InventoriesPage">
			<div className="InventoriesPage__container">
				<PageHead info={PAGELABELS.inventories} />
				<InfoItemLabels labels={HEADERLABELS.INVENTORY} page={page} />
				<Inventory inventoryList={searchedInventory} />
			</div>
		</main>
	);
}
