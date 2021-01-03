import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBUYjmziZUw9FaqMIacLMHYs5KYbt_lxpM',
  authDomain: 'slack-e187f.firebaseapp.com',
  projectId: 'slack-e187f',
  storageBucket: 'slack-e187f.appspot.com',
  messagingSenderId: '519317004855',
  appId: '1:519317004855:web:f9afdbcbcd8a41fbc655b2',
  measurementId: 'G-WWH2GZYJYY',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
