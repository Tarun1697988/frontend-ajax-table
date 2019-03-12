export default function tableRow (data) {
	const {
		pictiure,
		isActive,
		about,
		balance,
		age,
		registered,
		company,
		email,
		phone,
		address
	} = data;

	const {
		first,
		last
	} = data.name;

	const elementTableRow = `<tr>
	<td><img src="${pictiure}" alt="User photo"/></td>
	<td>${first} ${last}</td>
	<td>${isActive}</td>
	<td>${about}</td>
	<td>${balance}</td>
	<td>${age}</td>
	<td>${registered}</td>
	<td>${company}</td>
	<td><a href="mailto:${email}">${email}</a></td>
	<td><a href="tel:${phone}">${phone}</a></td>
	<td>${address}</td>
</tr>`;

	return elementTableRow;
}