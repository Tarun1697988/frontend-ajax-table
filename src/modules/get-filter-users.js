export default async function getFilterUsers (userData, callback) {
	const data = await userData;
	const activeUserList = data.filter(callback);

	return activeUserList;
}