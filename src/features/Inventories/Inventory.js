import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { isLoadingInventories } from './InventorySlice';
import InventoryInfo from '../../components/InventoryInfo/InventoryInfo';

export default function Inventory({ inventoryList }) {
	const isLoading = useSelector(isLoadingInventories);
	// see if we can add some animations for this
	return isLoading ? (
		<h2>Loading Inventories...</h2>
	) : (
		<div className="Inventory">
			{inventoryList.map((inventory) => (
				<InventoryInfo key={uuid()} inventory={inventory} />
			))}
		</div>
	);
}
