import { pathToPageName } from '../../utils/utils';
import InfoItem from '../InfoItem/InfoItem';
import InfoItemCta from '../InfoItemCta/InfoItemCta';
import './InfoItems.scss';

export default function InfoItems({ pathname, data }) {
	const page = pathToPageName(pathname);

	const id = data[0][3];

	return (
		<div className={`InfoItems InfoItems--${page}`}>
			<InfoItem pathname={pathname} data={data} />
			<InfoItemCta className="InfoItems__buttons" pathname={pathname} id={id} />
		</div>
	);
}
