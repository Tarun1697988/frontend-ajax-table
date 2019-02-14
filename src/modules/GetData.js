import axios from 'axios';

const URL = 'https://www.mocky.io/v2/55f748b33568195d044b3dc8';

export default function getData () {

	const data = 	axios.get(URL)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			new Error(error);
		});

	return data;
}