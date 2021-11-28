import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './InfoItem.scss';

export default function InfoItem({ pathname, data }) {
	const page = pathname.replace('/', '');
	const displayInfo = (item) => {
		const [info, category, rest] = item;
		switch (category) {
			case 'link':
				return (
					<Link
						className={`InfoItem__info InfoItem__info--link`}
						to={`${pathname}/${rest}`}
					>
						{info}
					</Link>
				);
			case 'special':
				return <p className="InfoItem__info">{info}</p>;
			default:
				return <p className="InfoItem__info">{info}</p>;
		}
	};

	const itemToDisplay = data.map((item, index) => (
		<div key={uuid()} className={`InfoItem__item InfoItem__item--${page}`}>
			<p className="InfoItem__label">{item[0]}</p>
			{displayInfo(item.slice(1))}
		</div>
	));

	return <div className={`InfoItem InfoItem--${page}`}>{itemToDisplay}</div>;
}
