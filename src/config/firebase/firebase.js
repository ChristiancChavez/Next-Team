import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyD3T1kaaO7Sdrql-hdRv424Wg0ueDwY7Mc',
  authDomain: 'next-team-ad040.firebaseapp.com',
  databaseURL: 'https://next-team-ad040.firebaseio.com',
  projectId: 'next-team-ad040',
  storageBucket: 'next-team-ad040.appspot.com',
  messagingSenderId: '929079227815',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const ref = firebase.database().ref();
export const { auth } = firebase;
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
