import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
	getInventories,
	selectInventories,
	selectSearchedInventories
} from '../../features/Inventories/InventorySlice';
import Inventory from '../../features/Inventories/Inventory';
import PageHead from '../../components/PageHead/PageHead';
import { PAGELABELS } from '../../data/page-labels';
import './InventoryPage.scss';

export default function InventoryPage() {
	const searchedInventory = useSelector(selectSearchedInventories);
	const allInventories = useSelector(selectInventories);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!allInventories.length) {
			dispatch(getInventories());
		}
	}, [dispatch, allInventories]);
	return (
		<main className="InventoryPage">
			<div className="InventoryPage__container">
				<PageHead info={PAGELABELS.inventory} />
				<Inventory inventoryList={searchedInventory} />
			</div>
		</main>
	);
}
