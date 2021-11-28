import { useLocation } from 'react-router';
import { labelsFromInfo, pathToPageName } from '../../utils/utils';
import InfoItems from '../InfoItems/InfoItems';
import InfoItemLabels from '../InfoItemLabel/InfoItemLabel';

export default function WarehouseInfo({ warehouse }) {
	const { id, name, address, city, country, contact } = warehouse;
	const { name: contactName, phone, email } = contact;
	const { pathname } = useLocation();

	const warehouseInfo = [
		['WAREHOUSE', name, 'link', id],
		['ADDRESS', `${address}, ${city}, ${country}`, 'normal'],
		['CONTACT NAME', contactName, 'normal'],
		[
			'CONTACT INFO',
			<>
				{phone}
				<br />
				{email}
			</>,
			'normal'
		]
	];

	const page = pathToPageName(pathname);
	const labels = labelsFromInfo(warehouseInfo);

	return (
		<>
			<InfoItemLabels page={page} labels={labels} />
			<InfoItems pathname={pathname} data={warehouseInfo} />
		</>
	);
}
