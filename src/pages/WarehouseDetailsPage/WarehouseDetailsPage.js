import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { v4 as uuid } from 'uuid';
import InventoryInfo from '../../components/InventoryInfo/InventoryInfo';
import InfoItemLabels from '../../components/InfoItemLabel/InfoItemLabel';
import { HEADERLABELS } from '../../data/page-labels';
import { getWarehouseById } from '../../features/Warehouses/warehouseSlice';
import './WarehouseDetailsPage.scss';
import { pathToPageName } from '../../utils/utils';

export default function WarehouseDetailsPage() {
	const { warehouseId } = useParams();
	const warehouse = useSelector(getWarehouseById(warehouseId));
	const { pathname } = useLocation();
	const page = pathToPageName(pathname);

	return (
		<main className="WarehouseDetailsPage">
			<div className="WarehouseDetailsPage__container">
				{/* I need warehouse page header with the name of the warehouse */}
				{/* I need warehouse details */}
				<InfoItemLabels labels={HEADERLABELS.INVENTORY} page={page} />
				<div className="WarehouseDetailsPage__inventories">
					{warehouse.inventories.map((inventory) => (
						<InventoryInfo key={uuid()} inventory={inventory} />
					))}
				</div>
			</div>
		</main>
	);
}
