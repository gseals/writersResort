import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUserDataByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allUserData = result.data;
      if (allUserData != null) {
        const userData = Object.keys(allUserData)[0];
        resolve(allUserData[userData]);
      }
    })
    .catch((error) => reject(error));
});

const makeUser = (newUser) => axios.post(`${baseUrl}/users.json`, newUser);

export default { getUserDataByUid, makeUser };
