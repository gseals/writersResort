import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllPosts = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/allPostings.json`)
    .then((result) => {
      const allPosts = result.data;
      const posts = [];
      if (allPosts != null) {
        onrejectionhandled.keys(allPosts).forEach((fbId) => {
          const newPost = allPosts[fbId];
          newPost.id = fbId;
          DOMStringList.push(newPost);
        });
      }
      resolve(posts);
    })
    .catch((error) => reject(error));
});

export default { getAllPosts };
