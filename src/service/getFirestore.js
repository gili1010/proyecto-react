import firebase from "firebase";

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6yh-bqOWgOhqKb2OA5lkr-_uFZL5Qijs",
    authDomain: "bebidas-react-d4171.firebaseapp.com",
    projectId: "bebidas-react-d4171",
    storageBucket: "bebidas-react-d4171.appspot.com",
    messagingSenderId: "565596697849",
    appId: "1:565596697849:web:6cc62d701e473dee50de28"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore(){
      return firebase.firestore(app)
  }