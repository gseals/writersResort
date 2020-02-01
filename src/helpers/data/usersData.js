import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const makeUser = (newUser) => axios.post(`${baseUrl}/users.json`, newUser);

export default { makeUser };
