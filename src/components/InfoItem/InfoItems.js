import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './InfoItems.scss';

export default function InfoItems({ pathname, data }) {
	const page = pathname.replace('/', '');
	const displayInfo = (item) => {
		const [info, category, rest] = item;
		switch (category) {
			case 'link':
				return <Link to={`${pathname}/${rest}`}>{info}</Link>;
			case 'special':
				return <p className={`InfoItems__info InfoItems__info--${rest}`}>{info}</p>;
			default:
				return <p className={`InfoItems__info InfoItems__info--${page}`}>{info}</p>;
		}
	};

	const itemToDisplay = data.map((item) => (
		<div key={uuid()} className={`InfoItems__item InfoItems__item--${page}`}>
			<p className={`InfoItems__label InfoItems__label--${page}`}>{item[0]}</p>
			{displayInfo(item.slice(1))}
		</div>
	));

	return <div className={`InfoItems InfoItems--${page}`}>{itemToDisplay}</div>;
}
