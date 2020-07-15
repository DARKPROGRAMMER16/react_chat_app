import firebase from "firebase";

const Firebase = firebase.initializeApp({
    
        apiKey: "AIzaSyBhlW5PVZ9wdQxTMiPt26iLFeod5Qpj-Ic",
        authDomain: "chat-on-8dded.firebaseapp.com",
        databaseURL: "https://chat-on-8dded.firebaseio.com",
        projectId: "chat-on-8dded",
        storageBucket: "chat-on-8dded.appspot.com",
        messagingSenderId: "331663970566",
        appId: "1:331663970566:web:102efae81f377d53278e87",
        measurementId: "G-10V66W39S7"
      
});

const db = Firebase.firestore();

export default db;