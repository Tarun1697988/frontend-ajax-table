export default async function getSortUsers (userData, callback) {
	const data = await userData;

	const sortData = data.sort(callback);

	return sortData;
}