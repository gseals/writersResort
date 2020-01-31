import firebase from 'firebase/app';
import 'firebase/auth';

const getUid = () => firebase.auth().currentUser.uid;

const getDisplayName = () => firebase.auth().currentUser.displayName;

export default { getUid, getDisplayName };
