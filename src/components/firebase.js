import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3_S0EY964QShZFo2SL8ecG96bFL6fj6g",
  authDomain: "discord-for-traders.firebaseapp.com",
  databaseURL: "https://discord-for-traders.firebaseio.com",
  projectId: "discord-for-traders",
  storageBucket: "discord-for-traders.appspot.com",
  messagingSenderId: "914777906489",
  appId: "1:914777906489:web:dd29790fd408e8dd839ce8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
