import InfoItem from '../InfoItem/InfoItem';
import InfoItemCta from '../InfoItemCta/InfoItemCta';
import './InfoItems.scss';

export default function InfoItems({ pathname, data }) {
	const page = pathname.replace('/', '');

	const id = data[0][3];

	return (
		<div className={`InfoItems InfoItems--${page}`}>
			<InfoItem pathname={pathname} data={data} />
			<InfoItemCta pathname={pathname} id={id} />
		</div>
	);
}
