import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "xx",
  authDomain: "xxxxxx",
  projectId: "xxxxxx",
  storageBucket: "txxxxx",
  messagingSenderId: "xxxxx",
  appId: "xxxxxx",
  measurementId: "xxxxxxx"
};

let app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export { db };
