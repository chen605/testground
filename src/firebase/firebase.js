import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkQrE4-3YkJhDE7cZlyS8Qorj3wS9lWlc",
  authDomain: "movie-db-52dec.firebaseapp.com",
  projectId: "movie-db-52dec",
  storageBucket: "movie-db-52dec.appspot.com",
  messagingSenderId: "409969885721",
  appId: "1:409969885721:web:1fb879bee9ce66fbf1e088",
  measurementId: "G-XSF3PV98KZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
