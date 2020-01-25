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

const getSingleCommentData = (commentId) => axios.get(`${baseUrl}/comments/${commentId}.json`);

const deleteCommentData = (commentId) => axios.delete(`${baseUrl}/comments/${commentId}.json`);

const saveComment = (newComment) => axios.post(`${baseUrl}/comments.json`, newComment);

const editCommentData = (commentId, updateComment) => axios.put(`${baseUrl}/comments/${commentId}.json`, updateComment);

export default {
  getCommentsByPostingIdData,
  getSingleCommentData,
  deleteCommentData,
  saveComment,
  editCommentData,
};
