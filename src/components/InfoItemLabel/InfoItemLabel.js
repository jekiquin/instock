import { v4 as uuid } from 'uuid';
import './InfoItemLabels.scss';

export default function InfoItemLabels({ labels, page }) {
	return (
		<div className="InfoItemLabels">
			<div className={`InfoItemLabels__info InfoItemLabels__info--${page}`}>
				{labels.map((label) => (
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
