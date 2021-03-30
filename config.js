import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDwIlNbOet5qM4NTJ_3QuZRSzHD1Wuat2U",
  authDomain: "story-hub-d7764.firebaseapp.com",
  databaseURL: "https://story-hub-d7764-default-rtdb.firebaseio.com",
  projectId: "story-hub-d7764",
  storageBucket: "story-hub-d7764.appspot.com",
  messagingSenderId: "874274535240",
  appId: "1:874274535240:web:3e0cd4a3a7b845d3cca57d"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore()      