import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllCommentsData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/comments.json`)
    .then((result) => {
      const allComments = result.data;
      const comments = [];
      if (allComments != null) {
        Object.keys(allComments).forEach((fbId) => {
          const newComment = allComments[fbId];
          newComment.id = fbId;
          comments.push(newComment);
        });
      }
      resolve(comments);
    })
    .catch((error) => reject(error));
});

export default { getAllCommentsData };
