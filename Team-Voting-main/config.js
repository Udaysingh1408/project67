import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyAvkJ8sQ0Pkl3t4fvfJ20dvpplxwx1YZ6Y",
        authDomain: "project-67-e6d62.firebaseapp.com",
        projectId: "project-67-e6d62",
        storageBucket: "project-67-e6d62.appspot.com",
        messagingSenderId: "488632564614",
        appId: "1:488632564614:web:597bb65b6c87088eed0a07"
     
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();