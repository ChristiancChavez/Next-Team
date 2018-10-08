import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD3T1kaaO7Sdrql-hdRv424Wg0ueDwY7Mc",
    authDomain: "next-team-ad040.firebaseapp.com",
    databaseURL: "https://next-team-ad040.firebaseio.com",
    projectId: "next-team-ad040",
    storageBucket: "next-team-ad040.appspot.com",
    messagingSenderId: "929079227815"
};

console.log('AUTHENTICATION', firebase.app.length);

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
}