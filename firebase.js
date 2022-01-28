import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB_qogpNHxn9PCZfz9_Djm0lZpKXs_9tN8',
  authDomain: 'share-ride-1d9cd.firebaseapp.com',
  projectId: 'share-ride-1d9cd',
  storageBucket: 'share-ride-1d9cd.appspot.com',
  messagingSenderId: '35936570787',
  appId: '1:35936570787:web:4bcc1b8bd4f036f8bf9e16',
  measurementId: 'G-3V39RFSND7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
