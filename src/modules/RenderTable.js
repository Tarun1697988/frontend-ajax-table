import tableTitleRow from './TableTitleRow';
import tableRow from './TableRow';

const root = document.querySelector('.root');

async function renderTable (callback, title) {

	const data = await callback();
	const table
	= `<div>
			<h3>${title}</h3>
			<table>
				${tableTitleRow}
				${data.map(dataElement => tableRow(dataElement, root))}
			</table>
		</div>
	`;

	root.insertAdjacentHTML('beforeend', table);
}

export default renderTable;