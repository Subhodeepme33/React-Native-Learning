// import * as firebase from 'firebase';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

 const firebaseConfig = {
    apiKey: "AIzaSyDz412bWbW0xVDCK2GdfO2imRJQ6yBbyGw",
    authDomain: "sustainable-environment-alpha.firebaseapp.com",
    projectId: "sustainable-environment-alpha",
    storageBucket: "sustainable-environment-alpha.appspot.com",
    messagingSenderId: "282939713822",
    appId: "1:282939713822:web:d81c27d11c394a6290010f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export { firebase , database};