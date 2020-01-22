import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllPosts = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/allPostings.json`)
    .then((result) => {
      const allPosts = result.data;
      const posts = [];
      if (allPosts != null) {
        Object.keys(allPosts).forEach((fbId) => {
          const newPost = allPosts[fbId];
          newPost.id = fbId;
          posts.push(newPost);
        });
      }
      resolve(posts);
      console.log(posts);
    })
    .catch((error) => reject(error));
});

export default { getAllPosts };
