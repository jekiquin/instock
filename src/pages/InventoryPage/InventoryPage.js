import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PageHead from "../../components/PageHead/PageHead";
import PAGELABELS from "../../data/page-labels";
import "./InventoryPage.scss";

export default function InventoryPage() {
	return (
		<main className="InventoryPage">
			<div className="InventoryPage__container">
				<PageHead info={PAGELABELS.inventory} />
			</div>
		</main>
	);
}
