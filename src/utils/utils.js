export function pathToPageName(pathname) {
	return pathname.replace('/', '');
}

export function labelsFromInfo(data) {
	return data.map((value) => value[0]);
}
