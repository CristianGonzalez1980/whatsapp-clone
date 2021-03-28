import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBHSBS4X6EwYtJzTh5xUiAeJAk09A6RKJ4",
    authDomain: "whatsapp-2-45018.firebaseapp.com",
    projectId: "whatsapp-2-45018",
    storageBucket: "whatsapp-2-45018.appspot.com",
    messagingSenderId: "847131188685",
    appId: "1:847131188685:web:c39f8a5f0d9557f8ff3884"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };