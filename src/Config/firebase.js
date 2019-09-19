import firebase from 'firebase'
import "firebase/database" 

var firebaseConfig = {
    apiKey: "AIzaSyBvSOXYGlWu5Fb84sxhWU0GDHEGkjtKk5E",
    authDomain: "todoapp-5b15f.firebaseapp.com",
    databaseURL: "https://todoapp-5b15f.firebaseio.com",
    projectId: "todoapp-5b15f",
    storageBucket: "todoapp-5b15f.appspot.com",
    messagingSenderId: "405368580660",
    appId: "1:405368580660:web:f6d8753a65e0d301"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp