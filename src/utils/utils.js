export function pathToPageName(pathname) {
	return pathname.split('/')[1];
}

export function labelsFromInfo(data) {
	return data.map((value) => value[0]);
}
