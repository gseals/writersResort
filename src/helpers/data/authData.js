import firebase from 'firebase/app';
import 'firebase/auth';

const getUid = () => firebase.auth().currentUser.uid;

const getDisplayName = () => firebase.auth().currentUser.displayName;

const getUserPhoto = () => firebase.auth().currentUser.photoURL;


export default {
  getUid,
  getDisplayName,
  getUserPhoto,
};
