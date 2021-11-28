export const PAGELABELS = {
	warehouses: {
		header: 'Warehouses',
		button: 'Warehouse',
		action: null
	},
	inventories: {
		header: 'Inventories',
		button: 'Inventory',
		action: null
	}
};

export const HEADERLABELS = {
	WAREHOUSE: ['WAREHOUSE', 'ADDRESS', 'CONTACT NAME', 'CONTACT INFO'],
	INVENTORY: ['INVENTORY ITEM', 'CATEGORY', 'STATUS', 'QUANTITY', 'WAREHOUSE']
};

export const NAVITEMS = Object.keys(PAGELABELS).map(
	(label) => label[0].toUpperCase() + label.slice(1).toLowerCase()
);
