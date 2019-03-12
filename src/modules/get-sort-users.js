export default async function getSortUsers (userData, callback) {
	const data = await userData;

	console.log(userData);
	const sortData = data.sort(callback);

	console.log(sortData);
	return sortData;
}