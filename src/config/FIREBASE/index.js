import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyCa7qM9eq1MpK3mpAgw7TaGaS-kh221Q9Q",
    authDomain: "e-resik.firebaseapp.com",
    databaseURL: "https://e-resik-default-rtdb.firebaseio.com",
    projectId: "e-resik",
    storageBucket: "e-resik.appspot.com",
    messagingSenderId: "978231930126",
    appId: "1:978231930126:web:d085c983704fb9980fbb5f",
    measurementId: "G-KWHES0LCE5"
});

const FIREBASE = firebase;

export default FIREBASE;