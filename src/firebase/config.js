import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyARytdulqCTDwmV6ya8LtfKBN9VsRcYnLA',
  authDomain: 'firegram-478f3.firebaseapp.com',
  databaseURL: 'https://firegram-478f3.firebaseio.com',
  projectId: 'firegram-478f3',
  storageBucket: 'firegram-478f3.appspot.com',
  messagingSenderId: '126341082114',
  appId: '1:126341082114:web:1f8a346848f9adedba8b1b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
