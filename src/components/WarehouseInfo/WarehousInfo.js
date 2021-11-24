export default function WarehouseInfo({ warehouse }) {
	const { name, address, contact } = warehouse;
	const { name: contactName, phone, email } = contact;

	return (
		<div className="WarehouseInfo">
			<div className="WarehouseInfo__item">
				<p className="WarehouseInfo__label">WAREHOUSE</p>
				<p className="WarehouseInfo__info">{name}</p>
			</div>
			<div className="WarehouseInfo__item">
				<p className="WarehouseInfo__label">ADDRESS</p>
				<p className="WarehouseInfo__info">{address}</p>
			</div>
			<div className="WarehouseInfo__item">
				<p className="WarehouseInfo__label">CONTACT NAME</p>
				<p className="WarehouseInfo__info">{contactName}</p>
			</div>
			<div className="WarehouseInfo__item">
				<p className="WarehouseInfo__label">CONTACT INFO</p>
				<p className="WarehouseInfo__info">{phone}</p>
				<p className="WarehouseInfo__info">{email}</p>
			</div>
		</div>
	);
}
