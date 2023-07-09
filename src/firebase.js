import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3JBi4luo1XKixUzTcVKYTOlusoH-zgSY",
    authDomain: "chat-app2-2a473.firebaseapp.com",
    projectId: "chat-app2-2a473",
    storageBucket: "chat-app2-2a473.appspot.com",
    messagingSenderId: "310927154243",
    appId: "1:310927154243:web:3073dfa1f9efa771df48f6"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };