import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD8AUJRQc_RlXIYdmJXGLFfV3_4EMHktD4',
  authDomain: 'eshop-212eb.firebaseapp.com',
  projectId: 'eshop-212eb',
  storageBucket: 'eshop-212eb.firebasestorage.app',
  messagingSenderId: '255743217614',
  appId: '1:255743217614:web:620cb2ff39aaed3f49a59f',
  measurementId: 'G-2NVLT05D0J',
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth}