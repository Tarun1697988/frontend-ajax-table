import getData from './GetData';

export default async function getActiveUser () {
	const data = await getData();
	const activeUserList = data.filter(user => user.isActive);

	return activeUserList;
}