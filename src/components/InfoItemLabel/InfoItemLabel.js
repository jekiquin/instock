import { v4 as uuid } from 'uuid';
import './InfoItemLabels.scss';

export default function InfoItemLabels({ labels, page }) {
	const labelsToDisplay = page === 'warehouses' ? labels.slice(0, 4) : labels.slice(0);
	return (
		<div className="InfoItemLabels">
			<div className={`InfoItemLabels__info InfoItemLabels__info--${page}`}>
				{labelsToDisplay.map((label) => (
					<button
						key={uuid()}
						className={`InfoItemLabels__label InfoItemLabels__label--${page}`}
					>
						{label}
					</button>
				))}
			</div>
			<p className="InfoItemLabels__action">ACTION</p>
		</div>
	);
}
