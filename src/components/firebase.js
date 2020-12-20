import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBRxj-p-1JprzmsX4fQ2-mkb6sdz6pWNh8",
    authDomain: "twitter-8971f.firebaseapp.com",
    projectId: "twitter-8971f",
    storageBucket: "twitter-8971f.appspot.com",
    messagingSenderId: "219348235385",
    appId: "1:219348235385:web:7b0d4025ae314b2aca90a8",
    measurementId: "G-30J5QYWDG9"
};    

const firebaseApp =firebase.initializeApp(firebaseConfig)
const db =firebaseApp.firestore()

export default db;