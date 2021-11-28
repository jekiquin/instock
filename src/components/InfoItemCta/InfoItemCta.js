import { Link } from 'react-router-dom';
import editButton from '../../assets/Icons/edit-24px.svg';
import deleteButton from '../../assets/Icons/delete_outline-24px.svg';
import './InfoItemCta.scss';

export default function InfoItemCta({ pathname, id }) {
	return (
		<div className="InfoItemCta">
			<Link
				className="InfoItemCta__link InfoItemCta__link--edit"
				to={`${pathname}/delete/${id}`}
			>
				<img className="InfoItemCta__button" src={deleteButton} alt="edit button" />
			</Link>
			<Link className="InfoItemCta__link" to={`${pathname}/edit/${id}`}>
				<img className="InfoItemCta__button" src={editButton} alt="edit button" />
			</Link>
		</div>
	);
}
