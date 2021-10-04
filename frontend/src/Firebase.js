import firebase from 'firebase';
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCVJRQm-N-1jLUXNSfz3DBZ-qfUq-nlZSg",
  authDomain: "farmgistic-a0a33.firebaseapp.com",
  projectId: "farmgistic-a0a33",
  storageBucket: "farmgistic-a0a33.appspot.com",
  messagingSenderId: "647651490078",
  appId: "1:647651490078:web:19f3ac06fc8e55e26db10f",
  measurementId: "G-ZBVLTH8H9W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
export {
  storage, firebaseConfig  as default
};  