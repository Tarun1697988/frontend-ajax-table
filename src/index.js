import './styles/style.css';
import renderTable from './modules/render-table';
import getData from './modules/get-data';
import getFilterUsers from './modules/get-filter-users';
import getSortUsers from './modules/get-sort-users';
import activeUser from './modules/active-user';
import compareAge from './modules/compare-age';
import compareName from './modules/compare-name';
import nameLength from './modules/name-length';

const API_URL = 'https://www.mocky.io/v2/55f748b33568195d044b3dc8';

const userData = getData(API_URL);

renderTable(userData, '1. Список всех пользователей');
renderTable(getFilterUsers(userData, activeUser), '2. Список активных пользователей');
renderTable(getSortUsers(userData, compareAge), '3. Список всех пользователей отсортированных по возрасту');
renderTable(getSortUsers(userData, compareName), '4. Список всех пользователей отсортированных по имени');
renderTable(getFilterUsers(userData, nameLength), '5. Пользователи с фамилией не короче 6 символов');