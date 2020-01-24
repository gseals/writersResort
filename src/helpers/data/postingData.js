import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllPostsData = () => new Promise((resolve, reject) => {
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
    })
    .catch((error) => reject(error));
});

const getSinglePostData = (postId) => axios.get(`${baseUrl}/allPostings/${postId}.json`);

const deletePostsData = (postId) => axios.delete(`${baseUrl}/allPostings/${postId}.json`);

const savePosting = (newPosting) => axios.post(`${baseUrl}/allPostings.json`, newPosting);

export default {
  getAllPostsData,
  getSinglePostData,
  deletePostsData,
  savePosting,
};
