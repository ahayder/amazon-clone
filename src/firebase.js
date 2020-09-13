import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvmiyMpXA-9cSsXS1P_0jcEti1xnvwZjA",
  authDomain: "clone-69f6d.firebaseapp.com",
  databaseURL: "https://clone-69f6d.firebaseio.com",
  projectId: "clone-69f6d",
  storageBucket: "clone-69f6d.appspot.com",
  messagingSenderId: "232053595099",
  appId: "1:232053595099:web:adfa91ed29fa32528265fe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }