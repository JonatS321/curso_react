import firebase from "firebase/app";

import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAGFr5hCbdag-r1sps-aoyF2Co3i9AfVxU",
    authDomain: "fb-ontecstore.firebaseapp.com",
    projectId: "fb-ontecstore",
    storageBucket: "fb-ontecstore.appspot.com",
    messagingSenderId: "642808466719",
    appId: "1:642808466719:web:d2bc47a24012c88796342a"
  };
  // Initialize Firebase

  const fb =   firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();