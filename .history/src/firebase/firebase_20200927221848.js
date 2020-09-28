import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAy6cMY0Once8b-Dbvoc_y6DKyIKUmdWos',
  authDomain: 'slack-89e9a.firebaseapp.com',
  databaseURL: 'https://slack-89e9a.firebaseio.com',
  projectId: 'slack-89e9a',
  storageBucket: 'slack-89e9a.appspot.com',
  messagingSenderId: '677080466326',
  appId: '1:677080466326:web:814adf231cf20e2bae93b7',
  measurementId: 'G-P6NXT9BZ02',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore