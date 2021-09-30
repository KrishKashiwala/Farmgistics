import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAFKjC8U2bJTUDnjeyPItNl7mv6BkoROts",
    authDomain: "myfirebase-6e645.firebaseapp.com",
    databaseURL: "https://myfirebase-6e645.firebaseio.com",
    projectId: "myfirebase-6e645",
    storageBucket: "myfirebase-6e645.appspot.com",
    messagingSenderId: "644154542686",
    appId: "1:644154542686:web:f65c419d2c722429b482cf",
    measurementId: "G-PWWCT8ESNX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const storage = firebaseApp.storage();

  export default storage;