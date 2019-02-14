import getData from './GetData';

export default async function getSortByAge () {
	const data = await getData();
	const sortUserList = data.sort((prevUser, nextUser) => {
		if (prevUser.age < nextUser.age) {
			return -1;
		}
	});

	return sortUserList;
}