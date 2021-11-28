import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { pathToPageName } from '../../utils/utils';
import {
	getAllData,
	selectSearchedWarehouses,
	selectWarehouses
} from '../../features/Warehouses/warehouseSlice';
import Warehouse from '../../features/Warehouses/Warehouse';
import PageHead from '../../components/PageHead/PageHead';
import InfoItemLabels from '../../components/InfoItemLabel/InfoItemLabel';
import { PAGELABELS, HEADERLABELS } from '../../data/page-labels';
import './WarehousesPage.scss';

export default function WarehousesPage() {
	const searchedWarehouse = useSelector(selectSearchedWarehouses);
	const allWarehouses = useSelector(selectWarehouses);
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const page = pathToPageName(pathname);

	useEffect(() => {
		if (!allWarehouses.length) {
			dispatch(getAllData());
		}
	}, [dispatch, allWarehouses]);

	return (
		<main className="WarehousesPage">
			<div className="WarehousesPage__container">
				<PageHead info={PAGELABELS.warehouses} />
				<InfoItemLabels page={page} labels={HEADERLABELS.WAREHOUSE} />
				<Warehouse warehouseList={searchedWarehouse} />
			</div>
		</main>
	);
}
