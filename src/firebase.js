import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0VVNeobpgwyUX-CxOdNf4hEm8AecQWT0",
  authDomain: "clone-e8803.firebaseapp.com",
  projectId: "clone-e8803",
  storageBucket: "clone-e8803.appspot.com",
  messagingSenderId: "905036858864",
  appId: "1:905036858864:web:7ff183ef481841e9130935",
  measurementId: "G-W4GJM7J1R7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };