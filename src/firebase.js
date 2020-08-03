import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBlxRHoWnEjDzqz2dvr230R39e4dQP-3tM",
    authDomain: "tinder-test-c0b7a.firebaseapp.com",
    databaseURL: "https://tinder-test-c0b7a.firebaseio.com",
    projectId: "tinder-test-c0b7a",
    storageBucket: "tinder-test-c0b7a.appspot.com",
    messagingSenderId: "167395687962",
    appId: "1:167395687962:web:17b75135739eafd5e09ba3",
    measurementId: "G-V9V85YMCBR"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database; 