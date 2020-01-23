import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCommentsByPostingIdData = (postId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/comments.json?orderBy="postId"&equalTo="${postId}"`)
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

export default { getCommentsByPostingIdData };
