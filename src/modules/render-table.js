import tableTitleRow from './component/table-title-row';
import tableRow from './component/table-row';

const root = document.querySelector('.root');

async function renderTable (userData, title) {

	const data = await userData;
	const table = `<div>
			<h3>${title}</h3>
			<table>
				${tableTitleRow}
				${data.map(dataElement => tableRow(dataElement))}
			</table>
		</div>
	`;

	root.insertAdjacentHTML('beforeend', table);
}

export default renderTable;