import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCnMUtOIsT1hm8uJapF2fTd58wep6en0QU",
        authDomain: "clothing-ecommerce-a2b4a.firebaseapp.com",
        projectId: "clothing-ecommerce-a2b4a",
        storageBucket: "clothing-ecommerce-a2b4a.appspot.com",
        messagingSenderId: "634199463838",
        appId: "1:634199463838:web:eccb8c13bffc1ee863288f",
        measurementId: "G-68J76KQC11"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;