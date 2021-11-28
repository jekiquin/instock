import InfoItems from '../InfoItems/InfoItems';
import { HEADERLABELS } from '../../data/page-labels';
import { useLocation } from 'react-router';

export default function WarehouseInfo({ warehouse }) {
	const { id, name, address, city, country, contact } = warehouse;
	const { name: contactName, phone, email } = contact;
	const { pathname } = useLocation();

	const warehouseInfo = [
		[HEADERLABELS.WAREHOUSE[0], name, 'link', id],
		[HEADERLABELS.WAREHOUSE[1], `${address}, ${city}, ${country}`, 'normal'],
		[HEADERLABELS.WAREHOUSE[2], contactName, 'normal'],
		[
			HEADERLABELS.WAREHOUSE[3],
			<>
				{phone}
				<br />
				{email}
			</>,
			'normal'
		]
	];

	return <InfoItems pathname={pathname} data={warehouseInfo} />;
}
