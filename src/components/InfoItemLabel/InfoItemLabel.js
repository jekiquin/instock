import './InfoItemLabels.scss';

export default function InfoItemLabels({ labels, page }) {
	return (
		<div className="InfoItemLabels">
			<div className={`InfoItemLabels__info InfoItemLabels__info--${page}`}>
				{labels.map((label) => (
					<p className={`InfoItemLabels__label InfoItemLabels__label--${page}`}>
						{label}
					</p>
				))}
			</div>
			<p className="InfoItemLabels__action">ACTION</p>
		</div>
	);
}
