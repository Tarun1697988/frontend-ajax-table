import getData from './GetData';

export default async function getDataFilterByNameLenght () {
	const data = await getData();
	const filterUserList = data.filter(user => user.name.last.length > 5);

	return filterUserList;
}