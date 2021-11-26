import { useLocation } from "react-router";
import InfoItems from "../InfoItem/InfoItems";

export default function WarehouseInfo({ warehouse }) {
	const { id, name, address, contact } = warehouse;
	const { name: contactName, phone, email } = contact;
	const { pathname } = useLocation();

	const warehouseInfo = [
		["WAREHOUSE", name, "link", id],
		["ADDRESS", address, "normal"],
		["CONTACT NAME", contactName, "normal"],
		["CONTACT INFO", [phone, <br />, email], "normal"],
	];

	return <InfoItems pathname={pathname} data={warehouseInfo} />;
}
