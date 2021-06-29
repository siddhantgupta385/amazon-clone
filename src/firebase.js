import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7yTorphhb3t9WOaMjXc22CZvHq3Z4gAo",
  authDomain: "clone-a64a4.firebaseapp.com",
  projectId: "clone-a64a4",
  storageBucket: "clone-a64a4.appspot.com",
  messagingSenderId: "482742965416",
  appId: "1:482742965416:web:7f34731b75180f8b821e9d",
  measurementId: "G-8CE4TNE0MW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };