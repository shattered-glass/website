import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyA5NM2vTaC9g7-cneEE-NrqPsA3h_LIYKA",
    authDomain: "eleuthia-dev.firebaseapp.com",
    projectId: "eleuthia-dev",
    storageBucket: "eleuthia-dev.appspot.com",
    messagingSenderId: "1047057957756",
    appId: "1:1047057957756:web:4264eb8009ab236f731af9",
    measurementId: "G-JLP5Y4W8B3"
});
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});