import * as firebase from 'firebase/app';
import 'firebase/storage'; // to store images
import 'firebase/firestore'; // database
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCbsosv7-6fi6SbOroFJcKOR_0TAXf7Qeo',
  authDomain: 'ninjagram-729fd.firebaseapp.com',
  databaseURL: 'https://ninjagram-729fd.firebaseio.com',
  projectId: 'ninjagram-729fd',
  storageBucket: 'ninjagram-729fd.appspot.com',
  messagingSenderId: '251001213152',
  appId: '1:251001213152:web:0dd9f30bf07bfbffc6c085',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initialize storage
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
