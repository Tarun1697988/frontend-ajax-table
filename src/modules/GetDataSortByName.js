import getData from './GetData';

export default async function getDataSortByName () {
	const data = await getData();
	const sortUserList = data.sort((userA, userB) => {
		userA.name[0].localeCompare(userB.name[0]);
	});

	return sortUserList;
}