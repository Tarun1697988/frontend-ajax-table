import './styles/style.css';
import renderTable from './modules/RenderTable';
import getActiveUser from './modules/GetActiveUser';
import getData from './modules/GetData';
import getSortByAge from './modules/GetSortByAge';
import getDataSortByName from './modules/GetDataSortByName';
import getDataFilterByNameLenght from './modules/GetDataFilterByNameLenght';

renderTable(getData, '1. Список всех пользователей');
renderTable(getActiveUser, '2. Список активных пользователей');
renderTable(getSortByAge, '3. Список всех пользователей отсортированных по возрасту');
renderTable(getDataSortByName, '4. Список всех пользователей отсортированных по имени');
renderTable(getDataFilterByNameLenght, '5. Пользователи с фамилией не короче 6 символов');