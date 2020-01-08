import * as firebase from "firebase";
let firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export const database = firebase.database().ref("/usernotes");
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();