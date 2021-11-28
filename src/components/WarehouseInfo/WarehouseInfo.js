import { useLocation } from 'react-router';
import InfoItems from '../InfoItems/InfoItems';

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

	return <InfoItems pathname={pathname} data={warehouseInfo} />;
}
