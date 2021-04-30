import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBJ8RGbX-Lf0zeEuIPvRGUubUD_8BX0_QQ",
    authDomain: "vue-todolist-c90c9.firebaseapp.com",
    projectId: "vue-todolist-c90c9",
    storageBucket: "vue-todolist-c90c9.appspot.com",
    messagingSenderId: "1067899839603",
    appId: "1:1067899839603:web:b5a0cdb856ad001656f606"
  };
  
  // Initialize Firebase
  export const fb = firebase.initializeApp(firebaseConfig);