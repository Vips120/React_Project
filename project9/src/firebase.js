import * as firebase from "firebase";
let firebaseConfig = {
    apiKey: "AIzaSyD2Jd97cpHz1q8__yrx1lZxoPhq6uIFhkk",
    authDomain: "reactnotes-ecc92.firebaseapp.com",
    databaseURL: "https://reactnotes-ecc92.firebaseio.com",
    projectId: "reactnotes-ecc92",
    storageBucket: "reactnotes-ecc92.appspot.com",
    messagingSenderId: "350325737986",
    appId: "1:350325737986:web:ee998a867cf45f837f351b"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export const database = firebase.database().ref("/usernotes");
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();