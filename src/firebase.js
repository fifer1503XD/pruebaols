import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBSIRJwMSIlpFGXQJifMUWimUKA4i6i8FQ",
    authDomain: "pruebatecnicaol.firebaseapp.com",
    projectId: "pruebatecnicaol",
    storageBucket: "pruebatecnicaol.appspot.com",
    messagingSenderId: "511886935536",
    appId: "1:511886935536:web:3f457d0e1304ef6d29c935"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const projectFirestore = firebase.firestore()
